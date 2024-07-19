import React,{useState} from 'react'

export default function Text(props) {
  const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!!","success");
  }

  const handleLowClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!!","success");
  }

  const handleOnChange=(event)=>{
    console.log("On Change");
    setText(event.target.value)
  }
  
  const clearText=()=>{
    let newText="";
    setText(newText);
    props.showAlert("Cleared Text!!","success");
  }

  const handleReverse=()=>{
    let newText=text.split(" ");
    let myText=newText.reverse();
    let reverseText=myText.join();
    setText(reverseText);
    props.showAlert("Converted to Reverse!!","success");
  }

  const [text,setText]=useState("");
  return (
    <>
    <div>
        <div className="mt-3">
        <h1>{props.heading1}</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="dark"?"grey":"white",color:props.mode==="dark"?"white":"black"}} id="exampleFormControlTextarea1" rows="8"></textarea>
        <button className="btn btn-dark mt-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-dark mt-2 ml-3" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-dark mt-2 ml-3" onClick={clearText}>Clear Text</button>
        <button className="btn btn-dark mt-2 ml-3" onClick={handleReverse}>Reverse Text</button>
        <hr/>
        <h1>{props.heading2}</h1>
        <p>{text.split(" ").length-1} Words and {text.length} Characters</p>
        <p>Time to Read the Given Input {0.008 * text.split(" ").length} Minutes</p>
        </div>
        <br/>
        <div>
          <h1>Preview</h1>
          <p>{text.length>0 ? text:"Enter Some Text to Preview"}</p>
        </div>
    </div>
    </>
  )
}
