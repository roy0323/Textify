import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = ()=>{
        let newText= text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const copyText = () => {
        navigator.clipboard.writeText(text);
    }

    const [text, setText] = useState('');
  return (
    <>
        <div className='container' style={{color: props.mode===`dark`?`white`:`#04184e`}} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode===`dark`?`grey`:`white`, color:props.mode===`dark`?`white`:`#04184e`}} id="myBox" rows="8"  ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={speak} type="submit">Speak</button>
        <button className="btn btn-primary mx-1 my-1" onClick={copyText}>Copy Text</button>
        </div>

        <div className='container my-3' style={{color: props.mode===`dark`?`white`:`#04184e`}} >
            <h2> Your text summary </h2>
            <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characteres</p>
            <p> {0.008 * text.split(" ").length} minutes read</p>
            <h2>Preview</h2>
            <p> {text.length>0?text:"Enter text in the textbox above to preview it here."} </p>
        </div>
    </>
    
  )
}

