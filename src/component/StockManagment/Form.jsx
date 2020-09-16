import React from 'react';
import "./Form.css"


function Form(){
    return(
        <div class="p-3 mb-2 bg-primary text-white"> 
        <form className="divs" >
        <div class="form-group" className="container mt-4"  style={{backgroundColor: "lightblue"}}>
            <label  ><b>Order Number</b></label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ender Order Number"></input>
            
            <label ><b>Rider Name</b></label>
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter rider Name"></input>

            <label ><b>Date</b></label>
            <input type="date" class="form-control" id="exampleInputPassword1"></input>
            
            <label ><b>Value</b></label>
            <input type="numbers" class="form-control" id="exampleInputPassword1" placeholder="Order value"></input>
           <center><button className="container mt-4" className="margin" >Add</button></center> 

            


        </div>

</form></div>
       
    );
}

export default Form;