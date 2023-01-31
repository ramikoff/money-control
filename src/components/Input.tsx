import React, { ChangeEventHandler, KeyboardEventHandler } from 'react'

type InputProps = {
  placeholder: string
  id: string
  name: string
  onKeyDown: KeyboardEventHandler<HTMLInputElement>
  onChange: ChangeEventHandler
}

export const Input = (props: InputProps) => {

  return (
    <div>
      <input
        type='text'
        id={props.id}
        name={props.name}
        className='input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center w-4/6 mt-2 mb-2'
        onKeyDown={props.onKeyDown}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </div>
  )
}
