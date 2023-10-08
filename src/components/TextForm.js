import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    
    function handleUpClick(){
        let newtext = text.toUpperCase().trim();
        setText(newtext);
        props.showAlert("Converted to UpperCase","success")
    }
    
    function handleLoClick(){
        let newtext = text.toLowerCase().trim();
        setText(newtext);
        props.showAlert("Converted to LowerCase","success")
    }

    function handleCopy(){
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied","success")
    }
    
    function handleClearClick(){
        setText("");
        props.showAlert("Text Cleared","success")
    }
    
    function handleTitleClick(){
        if(!text){
            props.showAlert("Converted to Title Case","success")
            return setText("")
        }

        let newtext = text.split(" ")
        let str=""
        for(let i=0;i<newtext.length;i++){
            if(newtext[i][0]!==newtext[i][0].toUpperCase()){
                str+=newtext[i][0].toUpperCase()
                if(newtext[i].slice(1)===newtext[i].slice(1).toLowerCase()){
                    str+=newtext[i].slice(1)+" ";
                }else{
                    str+=newtext[i].slice(1).toLowerCase()+" ";
                }
            }else{
                if(newtext[i].slice(1)===newtext[i].slice(1).toLowerCase()){
                    str+=newtext[i].slice(0,1)+newtext[i].slice(1)+" ";
                }else{
                    str+=newtext[i].slice(0,1)+newtext[i].slice(1).toLowerCase()+" ";
                }
            }
        }
        
        setText(str.trim())
        props.showAlert("Converted to Title Case","success")
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <div className="mb-3">
                <label htmlFor="MyBox" className="form-label"><h3>{props.heading}</h3></label>
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',
                color: props.mode==='dark'?'white':'#042743'}}
                id="MyBox" name='MyBox' placeholder='Enter text here :' rows="15"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-success mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-secondary mx-2 my-1" onClick={handleTitleClick}>Convert to Title case</button>
            <button disabled={text.length===0} className="btn btn-info mx-2 my-1" onClick={handleCopy}>Copy text</button>
            <button disabled={text.length===0} className="btn btn-danger mx-2 my-1" onClick={handleClearClick}>Clear</button>
        </div>
        <div className="container my-3"  style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h3>Text Summary :</h3>
            <p>{text.length===0?0:text.trim().split(/\s+/).length} words and {text.trim().length} characters</p>
            <p>{text.length===0?0:0.008 * text.trim().split(/\s+/).length} minutes are required to read.</p>
            <h3>Preview</h3>
            <p>{text.length>0?<pre>{text}</pre>:"Nothing to preview"}</p>
        </div>
        </>
    )
}