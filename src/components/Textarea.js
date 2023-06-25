import React, { useState } from 'react'


export default function Textarea(props) {
  const [text, setText] = useState("This is example Of some words");
  const onhandle = () => {
    let change = text.toUpperCase();
    setText(change);
    props.showAlert("Convert To uppercase","success");


    // console.log("onclick method is run");

  }

  const onlower = ()=>{
    let change = text.toLocaleLowerCase();
    setText(change)
    props.showAlert("Convert To lowercase","success");
  }
  const onclear = () => {
    let change = "";
    props.showAlert("Clear Text","success");
    setText(change);

    // console.log("onclick method is run");

  }
  const handlechange = (event) => {
    setText(event.target.value)
    // console.log("onchange is run")
  }

  return (
    <>

      <div>

        <div className="mb-3">
          <label htmlFor="myBox" className="form-label" style={{color:props.mode==="grey"?"white":"black"}}>{props.heading}</label>
          <textarea className="form-control" style={{backgroundColor:props.mode==="dark"? "grey":"white",color:props.mode === "grey"? "white":"black"}} id="Textarea"  rows="8" value={text} onChange={handlechange}></textarea>
        </div>
        <button className="btn btn-primary my-3 mx-2" onClick={onhandle}>Convert to Uppercase</button>
        <button className="btn btn-primary my-3 mx-2" onClick={onlower}>Conver To Lowercase</button>
        <button className="btn btn-primary my-3 mx-2" onClick={onclear}>Clear</button>
      </div>
   
     

      <div style={{color:props.mode==="grey"?"white":"black"}}>
        <p className='my-3'>Your Words : {text.split(" ").length - 1}

          Your characater : {text.length}
        </p>
      </div>
      <div style={{color:props.mode==="grey"?"white":"black"}}>
        How much tale time to read this : {0.0005 * text.length}
      </div>
      <div className='submit' style={{color:props.mode==="grey"?"white":"black"}}>
        Your summary : {text.length>0? text : "Enter In Textbox To Preview Here"}
      </div>
    </>
  )
}
