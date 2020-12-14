import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header'
import { Editor } from './components/Editor'
import Prompt from './components/Prompt';
import useLocalStorage from './hooks/useLocalStorage'

function App() {

  const [code, setCode] = useLocalStorage('code', '')


  return (
    <div className="App">
      <Header></Header>
      <div className="main">
        <div className="main__panel--left">
          <Prompt />
          <Editor
            language="javascript"
            value={code}
            onChange={setCode}
          />
        </div>
        <div className="main__panel--right"></div>
      </div>
    </div>
  );

}

export default App;
