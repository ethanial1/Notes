import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import NotesList from './components/NotesList';
import CreateUser from './components/CreateUser';
import CreateNoteForme from './components/CreateNoteForme';

function App() {
  return (
    <Router>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous"></link>
      <link href="https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css" rel="stylesheet"></link>
      <Navigation/>
      <div className="container p-4">
        <Route path="/" exact component={NotesList}/>
        <Route path="/edit/:id" component={CreateNoteForme}/>
        <Route path="/create" component={CreateNoteForme}/>
        <Route path="/user" component={CreateUser}/>
      </div>
    </Router>
  );
}

export default App;
