import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';

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
    <td>Sapplier</td>
    <td>Suplier details</td>
    <td>HNB</td>
    <td>2/01/2020</td>
    <td>RS. 10000</td>
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
                        &times;
                      </button>
                    </div>
                    <div class="modal-body">
                      <p align="left">Do you want to delete.</p>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-default"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-danger">
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
    <td>Sapplier</td>
    <td>Suplier details</td>
    <td>HNB</td>
    <td>2/01/2020</td>
    <td>RS. 10000</td>
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
                    <div class="modal-body">
                      <p align="left">Do you want to delete.</p>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-default"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-danger">
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
    <td>Sapplier</td>
    <td>Suplier details</td>
    <td>HNB</td>
    <td>2/01/2020</td>
    <td>RS. 10000</td>
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
                    <div class="modal-body">
                      <p align="left">Do you want to delete.</p>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-default"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-danger">
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
    <td>Sapplier</td>
    <td>Suplier details</td>
    <td>HNB</td>
    <td>2/01/2020</td>
    <td>RS. 10000</td>
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
                    <div class="modal-body">
                      <p align="left">Do you want to delete.</p>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-default"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-danger">
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
    <Link to="/Form"><button class="button" variant="contained" color="secondary"><b>ADD</b></button></Link>
        </div>
    </table>


</div>

    );
}

export default Incomepage;