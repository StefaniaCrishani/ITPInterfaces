import React from 'react';
import {Link} from 'react-router-dom';
import './Financialpages.css';

function Financialtabbar(){
    return(
    <div class="acnav">
      
      <hr></hr>
	   <button class="class1"  type="button" ><Link style={{color:'white'}} class="nav-link" to="/"><b>Dashboard</b></Link></button> 
	   <button class="class1" type="button" ><Link style={{color:'white'}} class="nav-link" to="/income"><b>Income</b></Link></button> 
	   <button class="class1" type="button" ><Link style={{color:'white'}} class="nav-link" to="/expenses"><b>Expenses</b></Link></button> 
	   <button  class="class1" type="button"><Link style={{color:'white'}} class="nav-link" to="/"><b>Report</b></Link></button> 
     <br></br><br></br>

     </div>

    );

}

export default Financialtabbar;