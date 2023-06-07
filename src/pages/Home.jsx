import React from 'react'
import "./assets/styles/Banner.css"

function Home() {
  return (
    <div className="container-fluid">
        <div className="row bngimg  pt-5 pb-5"> 
            <div className="col col-md-7 text-light ps-4 pe-5">
                <h1 className='mt-4 mb-4 lh-5' id='typed' style={{ fontWeight : 'bold', color:"white"}}>Life starts with water</h1>
                <p className='text-justify ' style={{ textAlign : "justify", fontSize : "25px", lineHeight : "2", fontStyle : 'italic', color : 'black', fontWeight:"normal"}}>Ro-zone Technologies offers Domestic,Commercial&Industrial RO Water Purification & Treatment. 

Ro-zone technologies in the development of a healthy environment thereby giving a better quality of life. Best RO Plants ,Water softeners,  many more 
                     
                </p>
                <button type="button" class="btn btn-outline-primary">know more</button>
            </div>
        </div>
     </div>

    
    

  )
}

export default Home
