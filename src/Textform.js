import React,{useState} from 'react'



export default function Textform(props) {
    const upper=(e)=>{
        setText(text.toUpperCase());
       
    }
    const copy=()=>{
        props.calert("your text has been copied","success");
        navigator.clipboard.writeText(text);
    }
    const clear=()=>{
        setText("");
    }
    const addlu=()=>{
        setText(text.toLowerCase()+text.toUpperCase())
    }
    const lower=()=>{
        setText(text.toLowerCase());
    }
    const handleOnChange=(e)=>{
        setText(e.target.value);
        console.log("changed");
    }
    const extraspaceremove=()=>{
        setText(text.split(" ").filter((a)=>{
            return a.length!==0;
        }).join(" "));
    }

    const countWord=()=>{
        let store=text.split(" ").filter((a)=>{
            return a.length!==0;
        })
        let storecount=0;
        for(let i=0;i<store.length;i++){
            if(store[i]===wcount){
                storecount++;
            }
        }
        if(storecount===0){
            Count("no such word found");
        }
        else{
            Count(String(storecount));
        }

    }
    const countOnChange=(e)=>{
            Count(e.target.value);
    }
    const leftOnChange=(e)=>{
        lreplace(e.target.value);
    }
    const rightOnChange=(e)=>{
        rreplace(e.target.value)
    }
    const wordReplace=()=>{
        let arstore=text.split(" ").filter((a)=>{
            return a.length!==0;
        })
        

        for(let i=0;i<arstore.length;i++){
            if(arstore[i]===lrep){
                arstore[i]=rrep;
            }
        }
        setText(arstore.join(" "));
    }
    const [wcount,Count]=useState("");
    const [text,setText]=useState("Enter ur text");
    const [lrep,lreplace]=useState("")
    const [rrep,rreplace]=useState("")

  return (

   <>
   {console.log("text")}
   <div className='container'>
    <h1 className='border-bottom'>{props.heading}</h1>
<div className="mb-3 ">
  
   <div>
  
  <textarea className="form-control border-bottom" id="mytextform" rows="8" value={text} onChange={handleOnChange}></textarea>
  </div>
  <button className='btn btn-primary my-2 mx-2' onClick={upper}>Uppercase</button>
  <button className='btn btn-primary my-2 mx-2' onClick={lower}>Lowercase</button>
  <button className='btn btn-primary my-2 mx-2' onClick={addlu}>upper+lower</button>
  <button className='btn btn-primary my-2 mx-2' onClick={clear}>Clear</button>
  <button className='btn btn-primary my-2 mx-2' onClick={copy}>Copy</button>
  <button className='btn btn-primary my-2 mx-2' onClick={extraspaceremove}>ExtraspaceRemove</button>
  
  <input type="text" id="count" className='mx-2 my-2' value={wcount} onChange={countOnChange}/>
  <button className='btn btn-primary my-2 mx-2' onClick={countWord}  >Count Word</button>
  <br/>
  
  <input type="text" id="count" className='mx-2 my-2' value={lrep} onChange={leftOnChange}/> 
  <span className='mx-2 my-2'>Replace left word with right word</span>
  <input type="text" id="count" className='mx-2 my-2' value={rrep} onChange={rightOnChange}/>
  <button className='btn btn-primary my-2 mx-2' onClick={wordReplace}  >Replace</button>
</div>
</div>
<div className="container" my-2>
    <h1 className='border-bottom'>Your text summary</h1>
    <p>{text.split(" ").filter((a)=>{
        return a.length!==0;
    }).length} words,{text.length} characters,aprrox reading time={(text.split(" ").filter((a)=>{
        return a.length!==0;
    }).length)*0.008}mins</p>
    <h3 className='bg-warning text-danger'>Preview</h3>
    <p className='bg-dark text-white'>{text}</p>
</div>
</>
 
  );
}

