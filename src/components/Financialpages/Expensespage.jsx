import React from 'react';

function Expensespage(){
    return(
<div class="acnav">
    <table>
    <tr>
        <th>Expense ID</th>
        <th>Description</th>
        <th>Payment Type</th>
        <th>Amount</th>
        <th></th>
    </tr>
    <tr>
    <td>Sapplier</td>
    <td>Suplier details</td>
    <td>Cheque</td>
    <td>RS. 10000</td>
    <td><button class="button" ><b>EDIT</b></button> | <button class="button"><b>DELETE</b></button></td>
    </tr>

    <tr>
    <td>Sapplier</td>
    <td>Suplier details</td>
    <td>HNB</td>
    <td>RS. 10000</td>
    <td><button class="button" ><b>EDIT</b></button> | <button class="button"><b>DELETE</b></button></td>
    </tr>
    </table>

    <div class="left"><button class="button" variant="contained" color="secondary"><b>ADD</b></button></div>
</div>
    );
}

export default Expensespage;