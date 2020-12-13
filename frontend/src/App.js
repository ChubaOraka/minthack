import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header'
// import { Users } from './components/Users'
import { Editor } from './components/Editor'
import CreateUser from './components/CreateUser'
// import { getAllUsers, createUser } from './services/UserService'

class App extends Component {

  state = {
    js: "",
    code: "",
    users: [],
    numberOfUsers: 0
  }

  onChangeForm = (e) => {
    let user = this.state.user
    if (e.target.name === 'firstname') {
      user.firstName = e.target.value;
    } else if (e.target.name === 'lastname') {
      user.lastName = e.target.value;
    } else if (e.target.name === 'email') {
      user.email = e.target.value;
    }
    this.setState({ user })
  }

  render() {

    return (
      <div className="App">
        <Header></Header>
        <div className="main">
          <Editor
            language="javascript"
            //displayName="JS"
            value={this.state.code}
            onChange={(input)=> this.setState({code: input}) }
          />
        </div>
      </div>
    );
  }
}

export default App;
