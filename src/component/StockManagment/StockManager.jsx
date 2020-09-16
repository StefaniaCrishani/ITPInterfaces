import React from 'react';
import "./stock.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
function  Stock(){
    return(
        <table className="ta">
        <tr>
        <td className="tt">
        <ul class="list-group">
                
                
                <h3  className="catogari">Categories</h3>
                <div class="dropdown" className="dropdown" >
                        <button  type="button" data-toggle="dropdown" className="button">GNC
                        <span class="caret"></span></button>
                        <ul class="dropdown-menu">
                            <li><a href="#">HTML</a></li>
                             <li><a href="#">CSS</a></li>
                            <li><a href="#">JavaScript</a></li>
                            <li class="divider"></li>
                            <li><a href="#">About Us</a></li>
                        </ul>

                        

                </div>
                <div class="dropdown">
                        <button  type="button" data-toggle="dropdown" className="button">Brands
                        <span class="caret"></span></button>
                        <ul class="dropdown-menu">
                            <li><a href="#">HTML</a></li>
                             <li><a href="#">CSS</a></li>
                            <li><a href="#">JavaScript</a></li>
                            <li class="divider"></li>
                            <li><a href="#">About Us</a></li>
                        </ul>

                </div>

                <div class="dropdown">
                        <button  type="button" data-toggle="dropdown" className="button">Health
                        <span class="caret"></span></button>
                        <ul class="dropdown-menu">
                            <li><a href="#">HTML</a></li>
                             <li><a href="#">CSS</a></li>
                            <li><a href="#">JavaScript</a></li>
                            <li class="divider"></li>
                            <li><a href="#">About Us</a></li>
                        </ul>

                </div>

                <div class="dropdown">
                        <button  type="button" data-toggle="dropdown" className="button">Skin Care
                        <span class="caret"></span></button>
                        <ul class="dropdown-menu">
                            <li><a href="#">HTML</a></li>
                             <li><a href="#">CSS</a></li>
                            <li><a href="#">JavaScript</a></li>
                            <li class="divider"></li>
                            <li><a href="#">About Us</a></li>
                        </ul>

                </div>

                <div class="dropdown">
                        <button  type="button" data-toggle="dropdown" className="button">Hair Care
                        <span class="caret"></span></button>
                        <ul class="dropdown-menu">
                            <li><a href="#">HTML</a></li>
                             <li><a href="#">CSS</a></li>
                            <li><a href="#">JavaScript</a></li>
                            <li class="divider"></li>
                            <li><a href="#">About Us</a></li>
                        </ul>

                </div>

                <div class="dropdown">
                        <button  type="button" data-toggle="dropdown" className="button">Personal Care
                        <span class="caret"></span></button>
                        <ul class="dropdown-menu">
                            <li><a href="#">HTML</a></li>
                             <li><a href="#">CSS</a></li>
                            <li><a href="#">JavaScript</a></li>
                            <li class="divider"></li>
                            <li><a href="#">About Us</a></li>
                        </ul>

                </div>

                <div class="dropdown">
                        <button  type="button" data-toggle="dropdown" className="button">Mother & Baby
                        <span class="caret"></span></button>
                        <ul class="dropdown-menu">
                            <li><a href="#">HTML</a></li>
                             <li><a href="#">CSS</a></li>
                            <li><a href="#">JavaScript</a></li>
                            <li class="divider"></li>
                            <li><a href="#">About Us</a></li>
                        </ul>

                </div>

                <div class="dropdown">
                        <button  type="button" data-toggle="dropdown" className="button">Medicine
                        <span class="caret"></span></button>
                        <ul class="dropdown-menu">
                            <li><a href="#">HTML</a></li>
                             <li><a href="#">CSS</a></li>
                            <li><a href="#">JavaScript</a></li>
                            <li class="divider"></li>
                            <li><a href="#">About Us</a></li>
                        </ul>

                </div>

                <div class="dropdown">
                        <button  type="button" data-toggle="dropdown" className="button">Medical Devices
                        <span class="caret"></span></button>
                        <ul class="dropdown-menu">
                            <li><a href="#">HTML</a></li>
                             <li><a href="#">CSS</a></li>
                            <li><a href="#">JavaScript</a></li>
                            <li class="divider"></li>
                            <li><a href="#">About Us</a></li>
                        </ul>
                        
                </div>
                <label for="vol"></label>

               
        </ul>
        </td>
        <td>
            <table>
            <tr>
                <td>
                <div className="row" align="center">
                    <div className="col-sm">
                    <img alt=""  width="250"  src={require("./img/santizer.jpg")}/>
                             <input type="number"></input>
                             <h6>Purel Hand Sanitizer</h6>
                             <h3>Rs.250/-</h3>
                            <div>
                                    <button className="btn btn-outline-success">Add to cart<FontAwesomeIcon icon={faCartPlus} size="lg"/></button>
                            </div>
                    </div>
                    

                    <div className="col-sm">
                    <img alt=""  width="250"  src={require("./img/santizer.jpg")}/>
                    <input type="number"></input>
                             <h6>Purel Hand Sanitizer</h6>
                             <h3>Rs.250/-</h3>
                            <div>
                                    <button className="btn btn-outline-success">Add to cart<FontAwesomeIcon icon={faCartPlus} size="lg"/></button>
                            </div>
                    </div>
                </div>
                </td>
                <td> 
                <div className="row" align="center">
                    <div className="col-sm">
                    <img alt=""  width="250"  src={require("./img/santizer.jpg")}/>
                    <input type="number"></input>
                             <h6>Purel Hand Sanitizer</h6>
                             <h3>Rs.250/-</h3>
                            <div>
                                    <button className="btn btn-outline-success">Add to cart<FontAwesomeIcon icon={faCartPlus} size="lg"/></button>
                            </div>
                    </div>
                    <div className="col-sm">
                    <img alt=""  width="250"  src={require("./img/santizer.jpg")}/>
                    <input type="number"></input>
                             <h6>Purel Hand Sanitizer</h6>
                             <h3>Rs.250/-</h3>
                            <div>
                                    <button className="btn btn-outline-success">Add to cart<FontAwesomeIcon icon={faCartPlus} size="lg"/></button>
                            </div>
                    </div>


                    </div>
                </td>
                    <td>
                    <div className="row" align="center">
                    <div className="col-sm">
                    <img alt=""  width="250"  src={require("./img/santizer.jpg")}/>
                    <input type="number"></input>
                             <h6>Purel Hand Sanitizer</h6>
                             <h3>Rs.250/-</h3>
                            <div>
                                    <button className="btn btn-outline-success">Add to cart<FontAwesomeIcon icon={faCartPlus} size="lg"/></button>
                            </div>
                    </div>
                    <div className="col-sm">
                    <img alt=""  width="250"  src={require("./img/santizer.jpg")}/>
                    <input type="number"></input>
                             <h6>Purel Hand Sanitizer</h6>
                             <h3>Rs.250/-</h3>
                            <div>
                                    <button className="btn btn-outline-success">Add to cart<FontAwesomeIcon icon={faCartPlus} size="lg"/></button>
                            </div>
                    </div>


                    </div>
                    </td>
                    <td>
                    <div className="row" align="center">
                    <div className="col-sm">
                    <img alt=""  width="250"  src={require("./img/santizer.jpg")}/>
                    <input type="number"></input>
                             <h6>Purel Hand Sanitizer</h6>
                             <h3>Rs.250/-</h3>
                            <div>
                                    <button className="btn btn-outline-success">Add to cart<FontAwesomeIcon icon={faCartPlus} size="lg"/></button>
                            </div>
                    </div>
                    <div className="col-sm">
                    <img alt=""  width="250"  src={require("./img/santizer.jpg")}/>
                    <input type="number"></input>
                             <h6>Purel Hand Sanitizer</h6>
                             <h3>Rs.250/-</h3>
                            <div>
                                    <button className="btn btn-outline-success">Add to cart<FontAwesomeIcon icon={faCartPlus} size="lg"/></button>
                            </div>
                    </div>


                    </div>
                    </td>
                    <td>
                    <div className="row" align="center">
                    <div className="col-sm">
                    <img alt=""  width="250"  src={require("./img/santizer.jpg")}/>
                    <input type="number"></input>
                             <h6>Purel Hand Sanitizer</h6>
                             <h3>Rs.250/-</h3>
                            <div>
                                    <button className="btn btn-outline-success">Add to cart<FontAwesomeIcon icon={faCartPlus} size="lg"/></button>
                            </div>
                    </div>
                    <div className="col-sm">
                    <img alt=""  width="250"  src={require("./img/santizer.jpg")}/>
                    <input type="number"></input>
                             <h6>Purel Hand Sanitizer</h6>
                             <h3>Rs.250/-</h3>
                            <div>
                                    <button className="btn btn-outline-success">Add to cart<FontAwesomeIcon icon={faCartPlus} size="lg"/></button>
                            </div>
                    </div>


                    </div>
                    </td>

                    
                 
                </tr>
            </table>
           
        </td>
        </tr>
        </table>

        
    );

}
export default Stock;