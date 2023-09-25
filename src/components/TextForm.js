import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUPClick= ()=>{
        let st=text.toUpperCase();
        setText(st);
    }
    const handleClearClick= ()=>{
        let st="";
        setText(st);
    }
    const handlelowClick= ()=>{
        let st=text.toLowerCase();
        setText(st);
    }
    const handleOnChange= (event)=>{
        setText(event.target.value);
    }
    
    const[text , setText]=useState('');
  return (
    <>
    <div className="container" >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUPClick} >Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handlelowClick} >Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick} >Clear</button>
    </div>
    <div className="container my-3">
        <h2>Your Text Summery</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read </p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
