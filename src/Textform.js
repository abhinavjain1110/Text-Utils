import React,{useState} from "react";

         
export default function Textform(props) {
    const [text, setText] = useState("");    //hooks in bootstarp
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    // to covert text to upper case
    const handleUpClick = () => {
       // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);           
        //we cannot directly change text, we need to do it with setText function like given above
        props.showAlert("Converted to Uppercase","success");
    }
    // to covert text to lower case
    const handleDnClick =() => {
        let newTextl=text.toLowerCase();
        setText(newTextl);
        props.showAlert("Converted to Lowercase","success");
    }
    const handleClear =()=>
    {
      let newTextc="";
      setText(newTextc);
      props.showAlert("Text Cleared","success");
    }
    const handleCopy = ()=>
    {
      navigator.clipboard.writeText(text);
      props.showAlert("Text Copied","success");
    }
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
      {/*<div className="p-3 mb-0 bg-dark text-light">*/}
            <h1>{props.heading}</h1>
            {/*<div className="p-3 mb-0 bg-dark text-light   ">*/}
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#121212':'white', color: props.mode==='dark'?'white':'#042743'}}id="myBox" rows="13"></textarea>
            </div>
            </div>
            <button disabled={text.length===0} className="btn btn-danger mx-3 my-2" onClick={handleUpClick} >Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-danger mx-3 my-2" onClick={handleDnClick}>Convert to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-danger mx-3 my-2" onClick={handleClear}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-danger mx-3 my-2" onClick={handleCopy}>Copy Text</button>
    {/*</div>*/}
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h2>Your Text Summary</h2>
    <p style={{color: props.mode==='dark'?'white':'#042743'}}>
    <p>{(text.length>0)?text.trim().split(/\s+/).length:0} words and {text.length} characters</p>
    <p>{(text.length>0)?0.008*text.trim().split(/\s+/).length:0} Minutes will be taken to read the text.</p>
    </p>
    {/*<div className="p-3 mb-0 bg-dark text-light   ">*/}
    <h2>Preview</h2>
    {/*<textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}}value={text} id="myBox" rows={5+text.split(" ").length}>*/}
    <p>{text.length>0?text:"Nothing to preview!"}</p>
    {/*</textarea>*/}
    </div>
    {/*</div>*/}
    {/*</div>*/}
    </>
  );}