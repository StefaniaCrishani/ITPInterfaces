import React from 'react';

function Form(){
    return(
<div>   
<form class="bg" >

<fieldset class="fsf">
<div class="card">

<center>

<h1>Add Income details</h1>
    
    <hr></hr>
    
    
    <label class="name"><b>Participant NIC</b></label>
    <input type="text1" placeholder="NIC" name="nic"><br></br></input>
    
	<label class="name"><b>Participant Name</b></label>
    <input type="text1" placeholder="Name" name="name"><br></br></input>
	
	<label class="address"><b>Event ID</b></label>
    <input type="text1" placeholder="Event ID" name="address"><br></br></input>
	
    <label class="email"><b>Email</b></label>
    <input type="text1" placeholder="Enter Email" name="email" required><br></br></input>
	
    <label class="phone"><b>Contact Number</b></label>
    <input type="text1" placeholder="Phone" name="phone"  ><br></br></input>
    
    <label class="age"><b>Age</b></label>
    <input type="text1" placeholder="Age" name="age"  ><br></br></input>
    <hr></hr>

	
 <a href=""><button type="submit" name="submit" class="registerbtn">Add Participant</button></a>
  
 </center>   
</div>

</fieldset>
</form>
</div>
    );
}
export default Form;