import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Financialdashboard from './components/Financialpages/Financialdashboard';
import Financialtabbar from './components/Financialpages/Financialtabbar';
import HeaderBar from './components/HeaderBar';
import Expensespage from './components/Financialpages/Expensespage';
import Incomepage from './components/Financialpages/Incomepage';
import Footer from './components/Footer';

import ProductManagment from './component/StockManagment/ProductManagment';
import Form from './component/StockManagment/Form';

function App() {
  return (
  <div> 
    <BrowserRouter>
    <HeaderBar/>
   
    <ProductManagment/>
    <Financialtabbar/>

    
    <Switch> 
      <Route path ="/productmng">
      <ProductManagment/>
      </Route>
      <Route path ="/income">
      <Incomepage/>
      </Route>
      <Route path ="/expenses" >
      <Expensespage/>
      </Route>
      <Route path ="/Form" >
      <Form/>
      </Route>
    
      </Switch>

      <Footer/>
     
    </BrowserRouter>
    
    
     </div>
  );
} 
export default App;
