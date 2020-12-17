import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/abcdef.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import 'codemirror/addon/selection/active-line.js'
import 'codemirror/addon/edit/closebrackets.js'
import 'codemirror/addon/display/fullscreen.js'
import 'codemirror/addon/display/fullscreen.css'
import { Controlled as CodeMirror } from 'react-codemirror2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch, faPlay } from '@fortawesome/free-solid-svg-icons'
import compute from '../hooks/compute'

export const Editor = (props) => {

    const {
        language,
        value,
        onChange,
        runCode
    } = props
    const [isCodeRunning, setIsCodeRunning] = useState(false)

    function handleChange(editor, data, value) {
        onChange(value)
    }

    async function handleRun() {
        runCode({result: "null", console:['']})
        let waittime = 50000
        setInterval(()=>console.log(`Waiting ${waittime} seconds`))
        setIsCodeRunning(true)
        console.log(value)
        
        const response = await compute.commandOutput({command: value})
        let data = await response.data
        setIsCodeRunning(false)
        console.log(data)
        runCode(data)
    }

    return (
        <div className="editor-container">
            <h4 className="editor-title">Javascript</h4>
            <CodeMirror
                onBeforeChange={handleChange}
                value={value}
                className="code-mirror-wrapper"
                options={{
                    lineWrapping: true,
                    lint: true,
                    autoCloseBrackets: true,
                    mode: language,
                    theme: 'abcdef',
                    lineNumbers: true,
                    styleActiveLine: true,
                    extraKeys: {
                        "F11": function (cm) {
                            cm.setOption("fullScreen", !cm.getOption("fullScreen"));
                        },
                        "Alt-Enter": function (cm) {
                            cm.setOption("fullScreen", !cm.getOption("fullScreen"));
                        },
                        "Esc": function (cm) {
                            if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
                        },
                        "Ctrl-Enter": cm => handleRun(),
                    }
                }}
            />
            <div className="btn">
                <button type="button"
                    title="Run"
                    disabled={isCodeRunning}
                    onClick={handleRun}
                    className="btn btn-info">
                    <FontAwesomeIcon 
                    id="icon" 
                    className={`${isCodeRunning ? 'rotate' : ''}`}
                    icon={isCodeRunning ? faCircleNotch : faPlay} />
                    {isCodeRunning ? '' : (<div id="status">Run</div>)}
                </button>
                <button type="button" title="Submit" onClick={(e) => null} className="btn btn-warning">Submit</button>
            </div>
        </div>
    )
}