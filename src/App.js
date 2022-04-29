import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios'


function App() {

  const[data,setData]=useState({})



  const handleOnChange= e=>{


    setData({
      [e.target.name]:e.target.value,
  
    })
  
  }


  const handleClick= ()=>{


  
  
    axios.post("http://127.0.0.1:5000/",data,{
      responseType:"blob",
    }).then(res=>{


    const url = window.URL.createObjectURL(

        new Blob([res.data],{type:res.headers['content-type']})
        
        );


    const link=document.createElement('a');
    link.href= url;
    link.setAttribute('download',"video.mp4");
    document.body.appendChild(link);
    link.click();





    }).catch()
  
  
  }




  return (
    <div className="App">


        


        <div className="form-grouph">
              <label htmlFor="url">please paste the URL </label>
              <input onChange={handleOnChange}  type="text" name="url" placeholder="ticker"/>
                </div>
  
  
                
  
              
  
  
       <div className="footerh">
          <button onClick={handleClick} className="btnh" type="button">
              Download          
          
          </button>
        </div>   
  
      
    </div>
  );
}

export default App;
