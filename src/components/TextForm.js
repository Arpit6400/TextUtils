import React,{useState} from 'react'

export default function TextForm(props) {
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed","success")
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!","info")
    }
    const handleUPClick= ()=>{
        let st=text.toUpperCase();
        setText(st);
        props.showAlert("Converted to UpperCase","success");
    }
    const handleClearClick= ()=>{
        let st="";
        setText(st);
        props.showAlert("Cleared!","info")
    }
    const handlelowClick= ()=>{
        let st=text.toLowerCase();
        setText(st);
        props.showAlert("Converted to LowerCase","success")
    }
    const handleAlterClick= ()=>{
        let st=text;
        let ans="";
        for(let index=0;index<st.length;index++){
            let char=st.charAt(index);
            if(index%2===0){
                char=char.toUpperCase();
            }
            else{
                char=char.toLowerCase();
            }
            ans +=char;
        }
        setText(ans);
        props.showAlert("Converted to AlTerCaSe","success")
    }
    const handleOnChange= (event)=>{
        setText(event.target.value);
    }
    
    const[text , setText]=useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='light'? 'black' : 'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? 'grey' : 'white',color: props.mode==='light'? 'black' : 'white' }} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUPClick} >Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handlelowClick} >Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleAlterClick} >Convert to AlTeRnAtEcAsE</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick} >Clear</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
    </div>
    <div className="container my-3"style={{color: props.mode==='light'? 'black' : 'white'}}>
        <h2>Your Text Summery</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the above textbox to preview it here"}</p>
    </div>
    </>
  )
}
