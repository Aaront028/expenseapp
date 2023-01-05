import React, { useState } from 'react'
import './ExpenseForm.css'

function ExpenseForm() {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  function titleChangeHandler(e) {
    setEnteredTitle(e.target.value)
    console.log(enteredTitle)
  }
  function amountChangeHandler(e) {
    setEnteredAmount(e.target.value)
    console.log(enteredAmount)
  }
  function dateChangeHandler(e) {
    setEnteredDate(e.target.value)
    console.log(enteredDate)
  }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense_actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
