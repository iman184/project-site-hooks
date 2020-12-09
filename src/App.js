import React from 'react'
import './App.css'
import  Header  from './componenets/Header';

import { Balance } from './componenets/Balance';
import  AddTransaction   from './componenets/AddTransaction';
import  IncomeExpenses   from './componenets/IncomeExpenses';
import  History   from './componenets/History';
function App() {
  return (
    <>
    <Header />
    <div className="App">
    <div className="first-side">
     
     <Balance />
     <AddTransaction />
     <IncomeExpenses />
     </div>
    
     <div className="second-side">
     <History />
     </div>
     
    </div>
   
    </>
  );
}

export default App;
