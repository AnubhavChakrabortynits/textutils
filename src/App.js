import React,{useState} from 'react'

import './App.css';
import Navbar from './components/navbar';
import Textform from './Textform';
import Alert from './components/Alert';


function App() {
  const nul=()=>{
    setAlert(null);
  }
  const [val,setVal]=useState("grey");
  const [mode,setMode]=useState("white");
  const [alert,setAlert]=useState(null);
  document.body.style.backgroundColor=val;

  const changeAlert=(message,type)=>{
          setAlert({
            mesg:message,
            typ:type
          });
          setTimeout(nul,1500);
  }
  const togglemode=()=>{
    if(mode==="dark"){
      setMode("white");
      setVal("grey");
      document.body.style.backgroundColor=val;
      changeAlert("white mode has been enabled","success");
    }
    else{
     setMode("dark");
      setVal("black");
      document.body.style.backgroundColor=val;
     changeAlert("dark mode has been enabled","warning");
    }
  }
  return (
<>


<Navbar title="Textutils1" mode={mode} toggle={togglemode} />
<Alert alert={alert} />
{console.log("rendering")}

<div className="container mt-3 text-warning">


            
            <Textform heading="Text Analyser" alert={alert} calert={changeAlert}/>


</div>


</>

  );
}

export default App;
