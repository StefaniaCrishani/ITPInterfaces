import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';
import './StockManagment.css';

function ProductManagment(){
    return(
<div>
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
<div >
<table>
    <tr>
        <th>Product Name</th>
        <th>Brand</th>
        <th>Suppliers</th>
        <th>Quntity</th>
        <th>Manufacture Date</th>
        <th>Expiry Date</th>
        <th>Availability</th>
        <th>Action</th>
    </tr>
    <tr>
    <td>Batadine</td>
    <td>Fresh Bliss</td>
    <td>Madicare</td>
    <td>100000</td>
    <td>12/12/2020</td>
    <td>12/12/2022</td>
    <td><input type="checkbox"></input></td>
    <td> <Link to="/Form">
              <FontAwesomeIcon icon={faEdit} color="black" className="mr-2" /></Link>
              
            <a href="#">
              <FontAwesomeIcon
                icon={faTrash}
                color="black"
                className="mr-2"
                data-toggle="modal"
                data-target="#myModal3"
              /></a>

              <div class="modal fade" id="myModal3" role="dialog">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 className="modal-title">Are you sure?</h4>
                      <button type="button" class="close" data-dismiss="modal">
                        
                      </button>
                    </div>
                   
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-default"
                        data-dismiss="modal">
                        Close
                      </button>
                      <button type="button" class="btn btn-success">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              </td>
    </tr>

    <tr>
    <td>Seratide</td>
    <td>Fluticasone</td>
    <td>Hemas</td>
    <td>50000</td>
    <td>12/01/2019</td>
    <td>12/01/2021</td>
    <td><input type="checkbox"></input></td>
    <td> 
              <Link to="/Form">
              <FontAwesomeIcon icon={faEdit} color="black" className="mr-2" /></Link>
              
            <a href="#">
              <FontAwesomeIcon
                icon={faTrash}
                color="black"
                className="mr-2"
                data-toggle="modal"
                data-target="#myModal3"
              /></a>

              <div class="modal fade" id="myModal3" role="dialog">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 className="modal-title">Are you sure?</h4>
                      <button type="button" class="close" data-dismiss="modal">
                        
                      </button>
                    </div>
                   
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-default"
                        data-dismiss="modal">
                        Close
                      </button>
                      <button type="button" class="btn btn-success">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              </td>
    </tr>

    <tr>
    <td>Seratide</td>
    <td>Fluticasone</td>
    <td>Hemas</td>
    <td>50000</td>
    <td>12/01/2019</td>
    <td>12/01/2021</td>
    <td><input type="checkbox"></input></td>
    <td> <Link to="/Form">
              <FontAwesomeIcon icon={faEdit} color="black" className="mr-2" /></Link>
              
            <a href="#">
              <FontAwesomeIcon
                icon={faTrash}
                color="black"
                className="mr-2"
                data-toggle="modal"
                data-target="#myModal3"
              /></a>

              <div class="modal fade" id="myModal3" role="dialog">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 className="modal-title">Are you sure?</h4>
                      <button type="button" class="close" data-dismiss="modal">
                        
                      </button>
                    </div>
                   
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-default"
                        data-dismiss="modal">
                        Close
                      </button>
                      <button type="button" class="btn btn-success">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              </td>
    </tr>
    <div class="left"><button class="button" variant="contained" color="secondary"><b>Print</b></button></div>
    </table>
    
    </div>
</div>
    );
}

export default ProductManagment;