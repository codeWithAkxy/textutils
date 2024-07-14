import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('');

    const handleOnChnage = (event) => {
        //   console.log("on change ioccured")
        setText(event.target.value)
    }

    const onUpperCaseClick = () => {
        // console.log("button is clicked---------" + text)
        if (text) {
            let newText = text.toUpperCase()
            setText(newText)
            props.showAlert('success', 'Converted To Uppercase !')
        }
    }

    const onLowerCaseClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('success', 'Converted To Lowercase !')
    }

    const handleClearText = () => {
        setText('')
        props.showAlert('success', 'Text Cleared !')
    }

    const handleCamelCaseClick = () => {
        let newText = text.toLowerCase();
        newText = newText.split(" ").reduce((s, c) => s
            + (c.charAt(0).toUpperCase() + c.slice(1)));
        setText(newText)
        props.showAlert('success', 'Converted To CamelCase !')
    }

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(text)
        props.showAlert('success', 'Text Copied To Clipboard !')
    }

    return (
        <>
            <div className={`container ${props.mode === 'light' ? 'text-dark' : 'text-white'}`}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label">Enter Text Below</label>
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#a7a3bc', color: props.mode === 'light' ? 'black' : 'white' }} value={text} id="myBox" rows="6" onChange={handleOnChnage}></textarea>
                    <button className="btn btn-primary mx-2 my-2" onClick={onUpperCaseClick} >Convert To uppercase</button>
                    <button className="btn btn-primary mx-2" onClick={onLowerCaseClick}>Convert To Lowercase</button>
                    <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
                    <button className="btn btn-primary mx-2" onClick={handleCamelCaseClick}>Convert To CamelCase</button>
                    <button className="btn btn-primary mx-2" onClick={handleCopyToClipboard}>Copy To Clipboard</button>
                </div>
            </div>
            <div className={`container my-3 text-${props.mode === 'light' ? 'dark' : 'white'}`}>
                <h4>Summary</h4>
                <p><b>{text.split(" ").filter((element)=>{return element.length!== 0}).length}</b> words and <b>{text.length}</b> characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!== 0}).length} minutes read</p>
                <h5>Preview</h5>
                <p>{text.length > 0 ? text : "Enter Something in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}
