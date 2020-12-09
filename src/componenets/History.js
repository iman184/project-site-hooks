import React from "react";
import '../style/css/History.css'


const History = () => {
  

  return (
    <div className="history-container">
      <div className="history-card">
        <div className="list">
          <ul className="history-list">
            {/* Include values from transactions array from context*/}
         
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