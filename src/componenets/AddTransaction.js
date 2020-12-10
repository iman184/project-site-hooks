import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import '../style/css/AddTransaction.css'

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }
  return (
   
    <div class="wrapper">
  
    <form onSubmit={onSubmit} className='form-wrapper contact-form'>
      <div className="form-control input-fields">
       
        <input type="text" className='input' value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
      </div>
      <br/>
      <div className="form-control  input-fields">
        
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..."  className='input'/>
      </div>
      <br/>
      <button className="btn">Add transaction</button>
    </form>
  </div>
  );
};


export default AddTransaction;