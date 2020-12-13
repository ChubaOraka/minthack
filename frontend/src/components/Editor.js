import React, { useState } from 'react'
// import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as CodeMirror } from 'react-codemirror2'

export const Editor = (props) => {

    const {
        language,
        // displayName,
        value,
        onChange
    } = props
    const [open, setOpen] = useState(true)

    function handleChange(editor, data, value) {
        onChange(value)
    }

    return (
        <div className="display-board">
            <h4>Javascript</h4>
            <CodeMirror
                onBeforeChange={handleChange}
                value={value}
                className="code-mirror-wrapper"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    theme: 'material',
                    lineNumbers: true
                }}
            />
            <div className="btn">
                <button type="button" onClick={(e) => null} className="btn btn-warning">Submit</button>
            </div>
        </div>
    )
}