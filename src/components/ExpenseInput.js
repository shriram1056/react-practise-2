import React from 'react'

const ExpenseInput = ({
  name,
  handleChangeName,
  handleChangeValue,
  handleSubmit,
  editItem,
  amount,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="name of the person"
        value={name}
        onChange={handleChangeName}
      ></input>
      <input
        type="number"
        placeholder="amount spent"
        value={amount}
        onChange={handleChangeValue}
      ></input>
      <button type="submit"> {editItem ? 'edit item' : 'add item'}</button>
    </form>
  )
}

export default ExpenseInput
