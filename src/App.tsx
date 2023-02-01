import React, { useState } from 'react'
import useLocalStorage from './hooks/useLocalStorage'
import './App.css'

import { Header } from './components/Header'
import { Balance } from './components/Balance'

function App() {
  const [alexBalance, setAlexBalance] = useLocalStorage('alexBalance', 0)
  const [yuliaBalance, setYuliaBalance] = useLocalStorage('yuliaBalance', 0)

  const [value, setValue] = useState({
    'add-Alexander': '',
    'sub-Alexander': '',
    'add-Yulia': '',
    'sub-Yulia': ''
  })

  const isInputValid = (inputValue: string) => {
    const reg = /^\d+$/
    return reg.test(inputValue)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isInputValid(e.target.value))
      setValue((prev) => {
        return { ...prev, [e.target.name]: e.target.value }
      })
  }

  const calcResult = (id: string) => {
    switch (id) {
      case 'add-Alexander':
        setAlexBalance(alexBalance + Number(value['add-Alexander']))
        break
      case 'sub-Alexander':
        setAlexBalance(alexBalance - Number(value['sub-Alexander']))
        break
      case 'add-Yulia':
        setYuliaBalance(yuliaBalance + Number(value['add-Yulia']))
        break
      case 'sub-Yulia':
        setYuliaBalance(yuliaBalance - Number(value['sub-Yulia']))
        break
    }
    setValue({
      'add-Alexander': '',
      'sub-Alexander': '',
      'add-Yulia': '',
      'sub-Yulia': ''
    })
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter')
      calcResult(e.currentTarget.id)
  }

  return (
    <div className='App'>
      <Header />
      <div className='wrapper flex flex-wrap justify-around'>
        <Balance user='Alexander' onChange={handleChange} onKeyDown={handleKeyDown} balance={alexBalance}
                 addValue={value['add-Alexander']}
                 subValue={value['sub-Alexander']}
        />
        <Balance user='Yulia' onChange={handleChange} onKeyDown={handleKeyDown} balance={yuliaBalance}
                 addValue={value['add-Yulia']}
                 subValue={value['sub-Yulia']}
        />
      </div>
    </div>
  )
}

export default App
