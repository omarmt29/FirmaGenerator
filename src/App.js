import './App.css';
import { useState } from 'react';
import Firma from './components/Firma';
import React, { createRef } from 'react'
import { useScreenshot } from 'use-react-screenshot'

function App() {

  const [data, setdata] = useState({ name: 'USERNAME', position: 'POSITION', location: 'location..', phone: ' + 999 999 999', email: 'youremail@novalproperties.com', facebook: '', });

  const [file, setFile] = useState('https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg');

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));

  }

  function handlerimagereset() {
    setFile('https://st4.depositphotos.com/4329009/19956/v/450/depositphotos_199564354-stock-illustration-creative-vector-illustration-of-default.jpg');
  }


  return (
    <div className="App container-fluid vh-100">

      <div className="row  mt-2 h-100">


        <div className="col-12 col-md-3 bg-secondary">
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <input className='file' type="file" onChange={handleChange} />
            </div>
            <div className="col-12 d-flex justify-content-center">
              <button onClick={e => handlerimagereset(e)}>remove image</button>
            </div>
            
            <div className="col-12 d-flex justify-content-center">
              <input type="text" placeholder='name' value={data.name} onChange={e => setdata({ ...data, name: e.target.value })} />
            </div>
            <div className="col-12 d-flex justify-content-center">
              <input type="text" placeholder='position' value={data.position} onChange={e => setdata({ ...data, position: e.target.value })} />
            </div>
            <div className="col-12 d-flex justify-content-center">
              <input type="text" placeholder='phone' value={data.phone} onChange={e => setdata({ ...data, phone: e.target.value })} />
            </div>
            <div className="col-12 d-flex justify-content-center">
              <input type="text" placeholder='email' value={data.email} onChange={e => setdata({ ...data, email: e.target.value })} />
            </div>
            <div className="col-12 d-flex justify-content-center">
              <input type="text" placeholder='location' value={data.location} onChange={e => setdata({ ...data, location: e.target.value })} />
            </div>
            <div className="col-12 d-flex justify-content-center">
              <input type="text" placeholder='facebook' value={data.facebook} onChange={e => setdata({ ...data, facebook: e.target.value })} />
            </div>


          </div>

        </div>

        <div className="col-12 col-md-9 ">

      
            <div className='h-100 m-auto d-flex align-items-center justify-content-center'>

             <Firma name={data.name} phone={data.phone} position={data.position} location={data.location} email={data.email} file={file} />
            
            
            </div>    
            

           
        
        </div>


      </div>

    </div>





  );
}

export default App;
