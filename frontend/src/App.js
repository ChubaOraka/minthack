import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header'
import { Editor } from './components/Editor'
import Prompt from './components/Prompt';
import CursorImitator from './components/CursorImitator';
import useLocalStorage from './hooks/useLocalStorage'

function App() {

  const starterCode = 'console.log("")' // This could be retrieved from database. Probably have to use JSON.stringify(???)
  const [code, setCode] = useLocalStorage('code', starterCode)
  const [output, setOutput] = useState({result: "null", console:['']})


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
            runCode={setOutput}
          />
          <CursorImitator
            content={output.console}
            className="output"
          />
        </div>
        <div className="main__panel--right"></div>
      </div>
    </div>
  );

}

export default App;
