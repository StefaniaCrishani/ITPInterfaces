import React from 'react';
import "./Form.css"
import {Link} from 'react-router-dom';


function Form(){
    return(
        <div class="acnav">   
        <div> 
                <form className="divs" >
                <div class="form-group" className="container mt-4"  >
                    <label for="autocomlete-input" ><b>Product Name</b></label><br></br>
                    <input type="text" class="autocomplete" id="incomeid"  placeholder="Enter product name"></input><br></br>
                    
                    <label ><b>Brand</b></label><br></br>
                    <input type="text"class="autocomplete" id="name" placeholder="Enter brand"></input><br></br>
        
                    
                    <label for="autocomlete-input" ><b>Supplier</b></label><br></br>
                    <input  type="text" class="autocomplete" id="autocomplete-input" placeholder="Enter supplier"></input><br></br>
                    
        
                    <label for="autocomlete-input"><b>Quntity</b></label><br></br>
                    <input type="text" class="autocomplete" id="qut"></input><br></br>
        
                    
                    <label ><b>Manufacture Date</b></label><br></br>
                    <input type="date" class="autocomplete" id="date"></input><br></br>

                    <label ><b>Expiry Date</b></label><br></br>
                    <input type="date" class="autocomplete" id="date"></input><br></br>

                    <label ><b>Availability</b></label><br></br>
                    <input type="checkbox" class="autocomplete" id="availability" placeholder="Enter availability"></input><br></br><br></br>
                   <Link to=""><button className="container mt-4" className="margin" >Print</button></Link>
        
                </div>
        
        </form>
        </div>
        </div>
       
    );
}

export default Form;