import React from "react";

import '../style/css/AddTransaction.css'

const AddTransaction = () => {


  return (
   
    <div class="wrapper">
  
    <form className='form-wrapper contact-form'>
      <div className="form-control input-fields">
       
        <input type="text" className='input' placeholder="Enter text..." />
      </div>
      <br/>
      <div className="form-control  input-fields">
        
        <input type="number"  placeholder="Enter amount..."  className='input'/>
      </div>
      <br/>
      <button className="btn">Add transaction</button>
    </form>
  </div>
  );
};


export default AddTransaction;