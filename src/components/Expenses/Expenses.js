import React, { useState } from 'react'
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

function Expenses(props) {
  const [filterData, setFilterData] = useState('2021')
  function onSaveFilterDataHandler(enteredFilterData) {
    setFilterData(enteredFilterData)
  }

  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filterData
    // console.log(expense.date.getFullYear())
  })

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterData}
          onSaveFilterData={onSaveFilterDataHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  )
}

export default Expenses
