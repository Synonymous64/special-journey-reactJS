import React from 'react';
import {useState} from 'react';
export default function TextForm(props) {
    const [text, setText] = useState('');
    //* The setText is the function which stores or update the values in the text variable or data member much like getter and setter the phrase "enter text area" after the useState will stored in text (data member).
    // text = ":prajwa";//! Wrong way to change the state.
    // setText("Prajwal");//! Correct way to change the state.
    const handleUpClick = () =>{
        console.log("This item was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert(" Converted to Upper Case", "success");
    }
    // while using state it gives us a free events which can be passed through the parameter of the function or method
    const handleOnChange = (event) => {
        console.log("This item was changed");
        //! by setText we can type or add element to the field it will append user text plus the already defined value.
        setText(event.target.value); 
    }
    const handleonLowerCase = () =>{
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert(" Converted to Lower Case", "success");
    }
    const handletoErase = () => {
        let newText = '';
        setText(newText);
        props.showAlert(" Erased", "success");
    }
    const handletoReverse = () => {
        let newText = text.split("").reverse("").join("");
        setText(newText);
        props.showAlert(" Reversed", "success");
    }
    const handletoCopy = () =>{
        navigator.clipboard.writeText(text);
        props.showAlert(" Copied to Clipboard", "success");
    }
    const handletoRemoveSpaces = () => {
        //TODO Reggex JavaScript watch later
        let newText = text.split(/[ ] +/);
        setText(newText.join(" "));
        props.showAlert(" Spaces Removed", "success");

    }
    return (
        <div >
            <h1 className={`text-${props.myText} mb-4`}>{props.heading} </h1>
            <div className="mb-3">
            {/* after adding value in text we can't add text to it  */}
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <div>
                <button className="btn btn-primary mx-3 my-3" disabled = {text.length === 0} style = {{backgroundColor:`${props.btnMode}` }} onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-3 my-3" disabled = {text.length === 0} style = {{backgroundColor:`${props.btnMode}` }} onClick={handleonLowerCase}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-3 my-3" disabled = {text.length === 0} style = {{backgroundColor:`${props.btnMode}` }} onClick={handletoErase}>Click to Erase</button>
                <button className="btn btn-primary mx-3 my-3" disabled = {text.length === 0} style = {{backgroundColor:`${props.btnMode}` }} onClick={handletoReverse}>Click to reverse</button>
                <button className="btn btn-primary mx-3 my-3" disabled = {text.length === 0} style = {{backgroundColor:`${props.btnMode}` }} onClick={handletoCopy}>Click to Copy the context</button>
                <button className="btn btn-primary mx-3 my-3" disabled = {text.length === 0} style = {{backgroundColor:`${props.btnMode}` }} onClick={handletoRemoveSpaces}>Click to Remove Extra Spaces</button>
            </div>
            <div className='container my-3'>
                <h2 className={`text-${props.myText}`}>Your Text Summary</h2>
                <p className={`text-${props.myText}`}>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
                <h2 className={`text-${props.myText}`}>Preview</h2>
                <p className={`text-${props.myText}`}>{text.length > 0 ? text : "Empty Sheet"}</p>
            </div>
        </div>
    )
}
