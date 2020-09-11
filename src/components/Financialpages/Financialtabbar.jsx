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

     <div class="acnav">
<h4><b><i class="fa fa-dashboard"></i> My Dashboard</b></h4>

<div class="row-padding margin-bottom">
  <div class="quarter">
    <div class="container red padding-16">
      <div class="left"><i class="fas fa-arrow-circle-up" ></i></div>
      <div class="right">
        <h3>000</h3>
      </div>
      <div class="clear"></div>
      <h4>Total Income</h4>
    </div>
  </div>
  <div class="quarter">
    <div class="container blue padding-16">
      <div class="left"><i class="fas fa-dollar-sign"></i></div>
      <div class="right">
        <h3>000</h3>
      </div>
      <div class="clear"></div>
      <h4>Total Expenditure</h4>
    </div>
  </div>
  <div class="quarter">
    <div class="container teal padding-16">
      <div class="left"><i class="fas fa-chart-line"></i></div>
      <div class="right">
        <h3>000</h3>
      </div>
      <div class="clear"></div>
      <h4>Profit</h4>
    </div>
  </div>
  <div class="quarter">
    <div class="container orange text-white padding-16">
      <div class="left"><i class="fas fa-money-check-alt"></i></div>
      <div class="right">
        <h3>000</h3>
      </div>
      <div class="clear"></div>
      <h4>Balance</h4>
  
    </div>
  </div>
</div>
</div>
</div>
    );

}

export default Financialtabbar;