import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    console.log(expenseData)
    props.onAddExpense(expenseData)
    setIfClicked(false)
  }

  const [ifClicked, setIfClicked] = useState(false)

  function isNotEditing() {
    setIfClicked(false)
  }

  function isEditing() {
    setIfClicked(true)
  }

  return (
    <div className="new-expense">
      {ifClicked ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          notEditing={isNotEditing}
        />
      ) : (
        <button onClick={isEditing}>Add New Expense</button>
      )}
    </div>
  )
}

export default NewExpense
