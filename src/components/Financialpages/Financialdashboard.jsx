import React from 'react';

function Financialdashboard() {
    return(
<div class="acnav">
  <div>
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
  

<div class="container">
    <h5>Currency</h5>
    <table class="table ">
      <tr>
        <td>Euro</td>
        <td>RS.210</td>
      </tr>
      <tr>
        <td>US dollar</td>
        <td>RS.184</td>
      </tr>
      <tr>
        <td>British Pound</td>
        <td>RS.239</td>
      </tr>
      <tr>
        <td>Indian Rupee</td>
        <td>RS.2</td>
      </tr>
      <tr>
        <td>Swiss Franc</td>
        <td>RS.202</td>
      </tr>
      <tr>
        <td>Japanese Yen</td>
        <td>RS.3</td>
      </tr>
      <button class="button ">More <i class="fa fa-arrow-right "></i></button>
  
    </table><br></br>
    
  </div>
</div>


    );
}

export default Financialdashboard;