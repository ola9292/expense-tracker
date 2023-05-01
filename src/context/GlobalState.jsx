import React,{createContext, useState} from 'react'; 

const Context =  React.createContext()




function ContextProvider({children}){

    const [count, setCount] = useState(0);
    const [transactions, setTransactions]  = useState([]);

        function Delete(id){
           let updatedTrans = transactions.filter((transaction)=>{
                return transaction.id != id
            })
            setTransactions(updatedTrans)
        }

        function freshTransaction(transaction){
            setTransactions((prevState)=>{
                return [...prevState, transaction]
            })
        }

    return (
        <Context.Provider value={{count, transactions, setCount, Delete, freshTransaction}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context};