import React from 'react';
import '../style/css/IncomeExpenses.css'

export const IncomeExpenses = () => {
  

 
  return (
    <div className="inc-exp-container">
        <div className='plu'>
          <h4>Income</h4>
  <p className="money plus">0.00 $</p>
        </div>
        <div className='mine'>
          <h4>Expense</h4>
  <p className="money minus">0.00 $</p>
        </div>
      </div>
  )
}

export default IncomeExpenses;