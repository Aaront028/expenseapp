import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'

function Expenses(props) {
  const [filterData, setFilterData] = useState('2021')
  function onSaveFilterDataHandler(enteredFilterData) {
    setFilterData(enteredFilterData)
    console.log('Filta Data:', filterData)
    console.log(enteredFilterData)
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterData}
          onSaveFilterData={onSaveFilterDataHandler}
        />
        {props.item.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  )
}

export default Expenses
