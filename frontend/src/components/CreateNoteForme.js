import React, { Component } from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default class CreateNoteForme extends Component {
    state = {
        users: [],
        userSelected: '',
        titulo: '',
        descrip: '',
        date: new Date(),
        editing: false,
        _id: null
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({users: res.data.map(user => user.username), userSelected: res.data[0].username});
        
        if(this.props.match.params.id){
            const res = await axios.get('http://localhost:4000/api/notes/' + this.props.match.params.id);
            this.setState(
                {   
                    titulo: res.data.title,
                    descrip: res.data.descrip,
                    userSelected: res.data.author,
                    date: new Date(res.data.date),
                    editing: true, 
                    _id: this.props.match.params.id
                }
            );   
        }
    }

    onSumbit = async (e) => {
        e.preventDefault();

        const newNote = {
            title: this.state.titulo,
            descrip: this.state.descrip,
            author: this.state.userSelected,
            date: this.state.date
        }
        console.log(this.state.editing);
        if(this.state.editing){
            await axios.put('http://localhost:4000/api/notes/'+ this.state._id, newNote);
        }else{
            await axios.post('http://localhost:4000/api/notes', newNote);
        }
    }   

    onInputChange = e => {
        this.setState(
            {
                //userSelected: e.target.value
                [e.target.name] : e.target.value
            }
        );
    }

    onChanegeDate = date => {
        this.setState({date});
    }
    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h5>Crear nueva nota</h5>
                    {/** SELECT USER  */}
                    <div className="form-group mb-3">
                        <select className="form-control" name="userSelected" onChange={this.onInputChange} value={this.state.userSelected}>
                            {this.state.users.map(usr => 
                                <option key={usr} value={usr}>
                                    {usr}
                                </option>
                            )}
                        </select>
                    </div>
                    <div className="form-group mb-3">
                        <input type="text" className="form-control" placeholder="Titulo" name="titulo" onChange={this.onInputChange} required value={this.state.titulo}/>
                    </div>
                    <div className="form-group mb-3">
                        <textarea name="descrip" className="form-control" placeholder="Descripción" onChange={this.onInputChange} required value={this.state.descrip}></textarea>
                    </div>
                    <div className="form-group">
                        <DatePicker className="form-control" selected={this.state.date} onChange={this.onChanegeDate}/>
                    </div>
                    <form onSubmit={this.onSumbit}>
                        <button type="submit" className="btn btn-primary">Save</button>
                    </form>
                </div>
            </div>
        )
    }
}
