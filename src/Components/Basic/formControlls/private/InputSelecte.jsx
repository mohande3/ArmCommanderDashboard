import React from 'react'

function InputSelectePrivate({ className = '', id = '', options = [] }) {
  return (
      <select id={id} className={'select2 form-select ' + className}>
          {options == null ?
              <>
              </> : 
              options.map((op, index) => {
                  return <option key={index}>{ op.name}</option>
              })
              }
      </select>
  )
}

export default InputSelectePrivate