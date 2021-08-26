import React, { Component } from 'react'
import axios from 'axios';

export default class CreateUser extends Component {

    state = {
        users: []
    }

    async componentDidMount(){
        // hacemos una petición con axios
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({users: res.data})

    }

    render() {
        return (
            <div>
                Crear usuario
            </div>
        )
    }
}
