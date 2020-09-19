import React from 'react';
import "./Form.css";
import {Link} from 'react-router-dom';

function Form(){
    return(
<div class="acnav">   
<div> 
        <form className="divs" >
        <div class="form-group" className="container mt-4"  >
            <label for="autocomlete-input" ><b>Income ID</b></label><br></br>
            <input type="text" class="autocomplete" id="incomeid"  placeholder="Enter payment ID"></input><br></br>
            
            <label ><b>Name</b></label><br></br>
            <input type="text"class="autocomplete" id="name" placeholder="Enter payment person Name"></input><br></br>

            
            <label for="autocomlete-input" ><b>Email</b></label><br></br>
            <input  type="email" class="autocomplete" id="autocomplete-input" placeholder="Enter email"></input><br></br>
            

            <label for="autocomlete-input"><b>Date</b></label><br></br>
            <input type="date" class="autocomplete" id="date"></input><br></br>

            
            <label ><b>Amount</b></label><br></br>
            <input type="numbers" class="autocomplete" id="amount" placeholder="Enter amount"></input><br></br><br></br>
           <Link to="/income"><button className="container mt-4" className="margin" >Add</button></Link>

        </div>

</form>
</div>
</div>
    );
}
export default Form;