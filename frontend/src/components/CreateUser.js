import React, { Component } from 'react'
import axios from 'axios';

export default class CreateUser extends Component {

    state = {
        users: [],
        username: ''
    }

    async componentDidMount(){
        this.getUsers();
    }

    getUsers = async () =>{
        // hacemos una petición con axios
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({users: res.data});
    }

    onChangeUserName = (e) => {
        this.setState({
            username: e.target.value
        });
    }

    onSumbit = async e => {
        // Evitamos que el formulario resetee la página
        e.preventDefault();

        const res = await axios.post('http://localhost:4000/api/users', {
            username: this.state.username
        })
        this.setState({username: ''});
        this.getUsers();
        
    }

    deleteUser = async (id) => {
        const res = await axios.delete('http://localhost:4000/api/users/' + id);
        console.log(res);
        this.getUsers();

    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h5>Crear nuevo Usuario</h5>
                        <form onSubmit={this.onSumbit}>
                            <div className="form-group">
                                <input type="text" className="form-control" onChange={this.onChangeUserName} value={this.state.username}/>
                            </div>
                            <button type="submit" className="btn btn-success mt-2">save</button>
                        </form>
                    </div>                
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.users.map( user => 
                                <li key={user._id}  className="list-group-item list-group-item-action" onDoubleClick={() => this.deleteUser(user._id)}>
                                    {user.username}
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
