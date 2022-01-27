import React, { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid' // for id
import ExpenseInput from './components/ExpenseInput'
import ExpenseList from './components/ExpenseList'

function App() {
  const [Data, setData] = useState(
    localStorage.getItem('expenses')
      ? JSON.parse(localStorage.getItem('expenses'))
      : { items: [], name: '', amount: 0, id: null, editItem: false }
  )
  const [ItemName, setItemName] = useState('')
  const [ItemAmount, setItemAmount] = useState('')

  const handleChangeName = (e) => {
    console.log(e.target.value)
    setItemName(e.target.value)
  }
  const handleChangeValue = (e) => {
    console.log(e.target.value)
    setItemAmount(e.target.value)
  }

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(Data))
  }, [Data])

  const handleSubmit = (e) => {
    e.preventDefault()
    const newItem = {
      name: ItemName,
      amount: ItemAmount,
      id: Data.editItem ? Data.id : uuid(),
    } // this invokes the function and stores the uuid in id
    const updatedItems = [...Data.items, newItem]
    setData({
      editItem: false,
      id: 0,
      name: '',
      amount: '',
      items: updatedItems,
    })
    setItemName('')
    setItemAmount('')
  }

  const handleEdit = (id) => {
    const filteredItems = Data.items.filter((item) => item.id !== id)
    const selectedItem = Data.items.find((item) => item.id === id)
    setData({
      editItem: true,
      id: selectedItem.id,
      name: selectedItem.name,
      amount: selectedItem.amount,
      items: filteredItems,
    })
    setItemName(selectedItem.name)
    setItemAmount(selectedItem.amount)
  }

  const handleDelete = (id) => {
    const filteredItems = Data.items.filter((item) => item.id !== id)
    setData({
      ...Data,
      items: filteredItems,
    })
  }

  const clearData = () =>
    setData({
      items: [],
      name: '',
      amount: 0,
      id: null,
      editItem: false,
    })
  console.log('dfdsfdsfs')
  let totalAmount = Data.items.reduce((totalAmount, item) => {
    totalAmount += parseInt(item.amount)
    console.log(totalAmount)
    return totalAmount
  }, 0)

  return (
    <div>
      <h1> Expense Input</h1>
      <ExpenseInput
        handleChangeName={handleChangeName}
        handleChangeValue={handleChangeValue}
        handleSubmit={handleSubmit}
        editItem={Data.editItem}
        name={ItemName}
        amount={ItemAmount}
      ></ExpenseInput>
      <ExpenseList
        items={Data.items}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        clearList={clearData}
      ></ExpenseList>
      <h1> the total expense is {totalAmount}</h1>
    </div>
  )
}

export default App
