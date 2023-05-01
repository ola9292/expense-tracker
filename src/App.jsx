import { useState } from 'react'
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/incomeExpenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
function App() {
 

  return (
    <div>
      <Header />
      <div className='container'>
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
      </div>
      
    </div>
  )
}

export default App
