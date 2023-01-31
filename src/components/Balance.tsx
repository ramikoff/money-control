import { Input } from './Input'
import React from 'react'

type BalanceProps = {
  user: string
  balance: any
  onKeyDown: React.KeyboardEventHandler
  onChange: React.ChangeEventHandler<HTMLInputElement>

  addValue: string
  subValue: string
}

export const Balance = (props: BalanceProps) => {

  return (
    <div className='balance mb-8 mt-8 border-2 shadow rounded py-8 px-8 w-4/6 max-w-3xl'>
      <div className='balance__header flex flex-col'>
        <span className=''>
          {props.user}'s current balance: {props.balance}
        </span>
        <span>Enter a value</span>
        <Input
          id={`add-${props.user}`}
          name={`add-${props.user}`}
          placeholder='+ income'
          onKeyDown={props.onKeyDown}
          onChange={props.onChange}
          value={props.addValue}
        />
        <Input
          id={`sub-${props.user}`}
          name={`sub-${props.user}`}
          placeholder='- expense'
          onKeyDown={props.onKeyDown}
          onChange={props.onChange}
          value={props.subValue}
        />
      </div>
    </div>
  )
}
