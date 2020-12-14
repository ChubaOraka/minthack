import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header'
// import { Users } from './components/Users'
import { Editor } from './components/Editor'
import useLocalStorage from './hooks/useLocalStorage'
import CreateUser from './components/CreateUser'
// import { getAllUsers, createUser } from './services/UserService'

function App() {

  const [code, setCode] = useLocalStorage('code', '')


  return (
    <div className="App">
      <Header></Header>
      <div className="main">
        <Editor
          language="javascript"
          //displayName="JS"
          value={code}
          onChange={setCode}
        />
      </div>
    </div>
  );

}

export default App;
