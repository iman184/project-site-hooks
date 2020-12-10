import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import '../style/css/Transaction.css'
export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';
  
  return (
    <li className={transaction.amount < 0 ? "expenseItem" : "incomeItem"}  
    >
      {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  )
}