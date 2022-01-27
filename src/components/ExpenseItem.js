import React from 'react'

const ExpenseItem = ({ name, amount, handleDelete, handleEdit }) => {
  return (
    <div>
      <span style={{ marginRight: '1rem ' }}>{name}</span>
      <span style={{ marginRight: '1rem ' }}>{amount}</span>
      <span style={{ marginRight: '1rem ' }} onClick={handleEdit}>
        edit
      </span>
      <span style={{ marginRight: '1rem ' }} onClick={handleDelete}>
        delete
      </span>
    </div>
  )
}

export default ExpenseItem
