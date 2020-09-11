import React from 'react';
import {Link} from 'react-router-dom';

import './StockManagment.css';

function ProductInfo(){
    return(

<div class="acnav" >
<div class="sidebar">
<meta charset="UTF-8"></meta>
<meta name="viewport" content="width=device-width, initial-scale=1"></meta>
<ul class="nav">
  <li><a  href="#home">Dashboard</a></li>
  <li><a  href="#news">Sales Managment</a></li>
  <li><a  class="active" href="#contact">Products Managment</a></li>
  <li><a  href="#about">Suppliers Managment</a></li>
  <li><a  href="#contact">Sales Reports</a></li>
  <li><a  href="#about">Stock Reports</a></li>
  <li><a  href="#about">Supplier Reports</a></li>
</ul>
</div>


   <div className="stockTable">
    <div className="border border-success col-sm rounded m-5 column">
     <h5 align="center" className="m-2 mb-4">
     </h5>
     <form>
     <h3>Product Informations</h3><br></br>
      <div class="form-group row">
          
       <label for="staticToken" class="col-sm col-form-label">
        Product Name :
              </label>
       <div class="col-sm">
        <input type="text" placeholder="product name"></input>
       </div>
      </div>

      

      <div class="form-group row">
       <label for="staticToken" class="col-sm col-form-label">
        Brand :
              </label>
       <div class="col-sm">
        <input type="text" placeholder="brand"></input>
       </div>
      </div>

      <div class="form-group row">
       <label for="staticToken" class="col-sm col-form-label">
        Suplier :
              </label>
       <div class="col-sm">
        <input type="text" placeholder="suplier"></input><br></br><br></br>
       </div>
      </div>

      <div class="form-group row">
       <label for="staticToken" class="col-sm col-form-label">
        Maximum Display Resolution :
              </label>
       <div class="col-sm">
        <input type="text" placeholder="Phone Number"></input>
       </div>
      </div>

      <div class="form-group row">
      <label for="staticToken" class="col-sm col-form-label">
        Item Weight :
              </label>
              <div class="col-sm">
        <input type="text" placeholder="item weight"></input>
       </div>
      </div>


      <div class="form-group row">
       <label for="staticToken" class="col-sm col-form-label">
        Item Model Number :
              </label>
       <div class="col-sm">
        <input type="mail" placeholder="model number"></input>
       </div>
      </div>

      <div class="form-group row">
       <label for="staticToken" class="col-sm col-form-label">
        Quntity :
              </label>
       <div class="col-sm">
        <input type="text" placeholder="quntity"></input>
       </div>
      </div>

      <div class="form-group row">
       <label for="staticToken" class="col-sm col-form-label">
        Manufacture Date :
              </label>
       <div class="col-sm">
        <input type="date" placeholder="DD.MM.YYYY"></input>
       </div>
      </div>

      <div class="form-group row">
       <label for="staticToken" class="col-sm col-form-label">
        Expiry Date :
              </label>
       <div class="col-sm">
        <input type="date" placeholder="DD.MM.YYYY"></input>
       </div>
      </div>

      <div className="checkbox1">
      <div class="form-group row">
      <div class="col-sm">
       <input type="checkbox" name="check"></input><label for="vehicle1">Generate a Password and User ID</label>   
       </div>
      </div>
      </div>
  
 
      <div className="stockBtn">
       <div class="form-group row">
       <div className="">
        <button className="btn btn-outline-success">Insert</button>
       </div>

       <div className="">
        <button className="btn btn-outline-success">Update</button>
       </div>

       <div className="">
        <button className="btn btn-outline-success">Delete</button>
       </div>
       </div>
      </div>
     </form>
    </div>

   </div>

</div>



    );
}

export default ProductInfo;