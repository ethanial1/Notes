import axios from 'axios'
import React, { Component } from 'react'
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';

export default class NotesList extends Component {
    state = {
        notes: []
    }

    async componentDidMount () {
        this.getNotes();
    }

    async getNotes (){
        const res = await axios.get('http://localhost:4000/api/notes');
        this.setState({notes: res.data});
    }

    deleteNote = async (notaId) => {
        await axios.delete('http://localhost:4000/api/notes/' + notaId);
        this.getNotes();
    }
    render() {
        return (
            <div className="row">
               {
                   this.state.notes.map(nota => 
                    ( 
                        <div className="col-md-4 p-2" key={nota._id}>
                            <div className="card text-white bg-dark mb-3">
                                <div className="card-header">{nota.title}</div>
                                <div className="card-body">
                                    <p>{nota.descrip}</p>
                                    <footer class="blockquote-footer">{nota.author} in {format(nota.date)}</footer>
                                </div>
                                <div className="card-footer">
                                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                        <button className="btn btn-outline-danger me-md-2 btn-sm" type="button" onClick={() => this.deleteNote(nota._id)}><i class="icon ion-md-trash"></i></button>
                                        <Link className="btn btn-outline-warning btn-sm" to={"/edit/"+nota._id}><i class="icon ion-md-create"></i></Link>

                                    </div>
                                </div>
                            </div>
                        </div> 
                    )
                    )
               }
            </div>
        )
    }
}
