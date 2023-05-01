import React,{useContext} from "react";
import { Context } from "../context/GlobalState";
import TransactionComponent from "./TransactionComponent";
function TransactionList(){

  const {transactions, count} = useContext(Context)
  console.log(transactions);
    return(
        <>
          <h3>History</h3>
        {transactions.map((transaction)=>{
          return <TransactionComponent key={transaction.id} transaction={transaction}/>
        })}
        </>
    )
}

export default TransactionList;