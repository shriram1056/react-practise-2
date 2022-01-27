import React from 'react'
import ExpenseItem from './ExpenseItem'

const ExpenseList = ({ items, handleDelete, handleEdit, clearList }) => {
  return (
    <div>
      <h1> Items</h1>
      {items.map((items) => {
        return (
          <ExpenseItem
            key={items.id}
            name={items.name}
            amount={items.amount}
            handleDelete={() => handleDelete(items.id)}
            handleEdit={() => handleEdit(items.id)}
          />
        )
      })}
      <button style={{ marginTop: '1rem ' }} type="button" onClick={clearList}>
        clear all
      </button>
    </div>
  )
}

export default ExpenseList
