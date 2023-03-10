import React, { useState } from 'react'
import './ExpenseForm.css'

function ExpenseForm(props) {
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  })

  function titleChangeHandler(e) {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: e.target.value }
    })
    console.log(userInput.enteredTitle)
  }
  function amountChangeHandler(e) {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: e.target.value }
    })
    console.log(userInput.enteredAmount)
  }
  function dateChangeHandler(e) {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: e.target.value }
    })
    console.log(userInput.enteredDate)
  }

  function submitHandler(e) {
    e.preventDefault()

    const expenseData = {
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    }

    props.onSaveExpenseData(expenseData)
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
      }
    })
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={userInput.enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense_actions">
        <button type="submit">Add Expense</button>
        <button type="button" onClick={props.notEditing}>
          Cancel
        </button>
      </div>
    </form>
  )
}

export default ExpenseForm
