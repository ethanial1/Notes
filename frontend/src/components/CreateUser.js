import React, { Component } from 'react'
import axios from 'axios';

export default class CreateUser extends Component {

    state = {
        users: []
    }

    async componentDidMount(){
        // hacemos una petición con axios
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({users: res.data});
        console.log(res.data);

    }

    render() {
        return (
            <div className="row container mt-5">
                <div className="col-md-4">
                    form user                    
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.users.map(user => <li key={user.username} className="list-group-item list-group-item-action">{user.username}</li>)
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
