import { useState } from 'react';
import './App.css';

function App() {

  const photos=[
    {
      src:"https://images.unsplash.com/photo-1682685796063-d2604827f7b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
    },
    {
      src:"https://images.unsplash.com/photo-1690287363823-b9e864c01b48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
    },
    {
      src:"https://images.unsplash.com/photo-1690233644210-b4687715a6fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80"
    }
  ]
  const [count,setCount]=useState(0);

  const nextPhoto=()=>{
    count===photos.length-1 ? setCount(0): setCount(count+1);
    
  }
  
  const prevPhoto=()=>{
    count===0 ? setCount(photos.length-1): setCount(count-1);
    
  }

  const goToPhoto=(index)=>{
    setCount(index);

  }

  return (
    <div className="App">
      <header className="App-header">
       <h1>Photo Slider</h1>
      </header>
      <div style={{ backgroundImage: `url(${photos[count].src})` }} className='image-field'>
         

        <div onClick={()=>prevPhoto()} className='prev-btn '>
          <i className="fa-solid fa-chevron-left"></i>
        </div>

        <div  onClick={()=>nextPhoto()} className='next-btn'>
          <i className="fa-solid fa-angle-right"></i>
        </div>

        <div className='element-points'>
           
        {photos.map((slide, index) => (
          <div    
            className={`point ${index===count ? "active":""} `}       
            id={index}
            onClick={() => goToPhoto(index)}
          >
            
          </div>
        ))}

        </div>

      </div>
    </div>
  );
}

export default App;
