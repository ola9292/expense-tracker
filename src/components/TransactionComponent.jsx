import React,{useContext} from "react";
import { Context } from "../context/GlobalState";

function TransactionComponent({transaction}){
  const {transactions, Delete} = useContext(Context)
    const sign = transaction.amount < 0 ? '-' : '+';
    return (
      <ul className="list">
        <li className={transaction.amount < 0?'minus':'plus'}>
           {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={()=>Delete(transaction.id)} className="delete-btn">x</button>
        </li>
      </ul>  
    )
}

export default TransactionComponent;