import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';
import './Incomepage.css';

function Incomepage(){

    return(
<div class="acnav">
    <table>
    <tr>
        <th>Income ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Date</th>
        <th>Amount</th>
        <th></th>
    </tr>
    <tr>
    <td>001</td>
    <td>Sellers</td>
    <td>nimali@gmail.com</td>
    <td>15/03/2020</td>
    <td>RS. 15300</td>
    <td>
    <div align="right">
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
              </div>
            </td>
    </tr>

    <tr>
    <td>002</td>
    <td>Riders</td>
    <td>sunil@gmail.com</td>
    <td>28/09/2019</td>
    <td>RS. 25000</td>
    <td>
    <div align="right">
            
            <Link to="/Form">
              <FontAwesomeIcon icon={faEdit} color="black" className="mr-2" />
              </Link>
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
                        &times;
                      </button>
                    </div>
                   
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-default"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-success">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            
          </div>
        

    </td>
    </tr>

    <tr>
    <td>003</td>
    <td>Customers</td>
    <td>amalia96@gmail.com</td>
    <td>10/02/2020</td>
    <td>RS. 70000</td>
    <td>
    <div align="right">
    <Link to="/Form">
              <FontAwesomeIcon icon={faEdit} color="black" className="mr-2" />
              </Link>
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
                        &times;
                      </button>
                    </div>
                    
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-default"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-success">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </td>
    </tr>

    <tr>
    <td>004</td>
    <td>Casheir</td>
    <td>sunimal@gmail.com</td>
    <td>18/04/2020</td>
    <td>RS. 50000</td>
    <td>
    <div align="right">
            
            <Link to="/Form">
              <FontAwesomeIcon icon={faEdit} color="black" className="mr-2" />
              </Link>
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
                        &times;
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
            
          </div>
        

    </td>
    </tr>
    <div class="left">
    <Link to="/Form"><button class="button" color="secondary"><b>ADD</b></button></Link>
        </div>
    </table>


</div>

    );
}

export default Incomepage;