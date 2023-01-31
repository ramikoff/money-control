import React, { useState } from 'react'
import './App.css'

import { Header } from './components/Header'
import { Balance } from './components/Balance'

function App() {
  const [alexBalance, setAlexBalance] = useState(0)
  const [yuliaBalance, setYuliaBalance] = useState(0)

  const [value, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {

    if (e.key === 'Enter') {
      calcResult(e.currentTarget.id, value)
      document.querySelectorAll('input').forEach(input => (input.value = ''))
    }
  }


  const calcResult = (id: string, val: string) => {
    switch (id) {
      case 'add-Alexander':
        setAlexBalance(alexBalance + Number(val))
        break
      case 'sub-Alexander':
        setAlexBalance(alexBalance - Number(val))
        break
      case 'add-Yulia':
        setYuliaBalance(yuliaBalance + Number(val))
        break
      case 'sub-Yulia':
        setYuliaBalance(yuliaBalance - Number(val))
        break
    }
  }


  return (
    <div className='App'>
      <Header />
      <div className='wrapper flex flex-wrap justify-around'>
        <Balance user='Alexander' onChange={handleChange} onKeyDown={handleKeyDown} balance={alexBalance}
        />
        <Balance user='Yulia' onChange={handleChange} onKeyDown={handleKeyDown} balance={yuliaBalance}
        />
      </div>
    </div>
  )
}

export default App
