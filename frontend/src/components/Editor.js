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

export const Editor = (props) => {

    const {
        language,
        value,
        onChange
    } = props
    const [open, setOpen] = useState(true)

    function handleChange(editor, data, value) {
        onChange(value)
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
                        }
                    }
                }}
            />
            <div className="btn">
                <button type="button" onClick={(e) => null} className="btn btn-warning">Submit</button>
            </div>
        </div>
    )
}