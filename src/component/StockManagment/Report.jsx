import React from 'react';
import "./Report.css";

function Report(){
    return(
        <form className="divs"  >
        <center><div class="form-group" className="container mt-4"  style={{backgroundColor: "lightblue"}} >
            <label ><b>Date</b></label>
           
            <input type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ender Order Number" className="margin"></input>
           
            
            <div>
           <button className="btn">login</button> 
            </div>
            
        </div>
        </center>
        </form>

    );



}

export default Report;