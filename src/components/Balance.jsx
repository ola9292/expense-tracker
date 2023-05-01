import React,{useContext} from "react";
import { Context } from "../context/GlobalState";
function Balance(){

const {transactions, count} = useContext(Context)
const amounts = transactions.map(transaction => transaction.amount);

const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return(
        <div>
            <h2>Your Balance</h2>
            <h1 id="balance">${total}</h1>
        </div>
    )
}

export default Balance;