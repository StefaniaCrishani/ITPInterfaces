import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Financialdashboard from './components/Financialpages/Financialdashboard';
import Financialtabbar from './components/Financialpages/Financialtabbar';
import HeaderBar from './components/HeaderBar';
import Expensespage from './components/Financialpages/Expensespage';
import Incomepage from './components/Financialpages/Incomepage';
import ProductInfo from './components/StockManagment/ProductInfo';
import ProductManagment from './components/StockManagment/ProductManagment';


function App() {
  return (
  <div> 
    <BrowserRouter>
    <HeaderBar/>
    <ProductInfo/>
       
    <Switch>
    
      <Route path ="/income">
      <Incomepage/>
      <Financialtabbar />
      </Route>
    <Route path ="/expenses" >
      <Expensespage/>
      </Route>
      <Route path ="/">
      <Financialdashboard/>
      </Route></Switch>
    
    </BrowserRouter>
    
    
     </div>
  );
} 
export default App;
