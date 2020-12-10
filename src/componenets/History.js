import React, { useContext } from "react";
import '../style/css/History.css'

import { Transaction } from './Transaction'
import { GlobalContext } from '../context/GlobalState';
const History = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="history-container">
      <div className="history-card">
        <div className="list">
          <ul className="history-list lists">
            {/* Include values from transactions array from context*/}
            {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
          </ul>
        </div>
        <div className="heading">
          <h3>History</h3>
        </div>
      </div>
    </div>
  )
}

export default History