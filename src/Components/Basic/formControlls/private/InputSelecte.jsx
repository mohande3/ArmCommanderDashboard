import React from 'react'

function InputSelectePrivate({className='',id='',options=[]}) {
  return (
      <select id={id} className={'select2 form-select ' + className}>
          {options == null ?
              <>
                  <option selected>
                      <span className="text-warning mx-2">
                          In Loaded
                      </span>
              </option>
              </> : 
              options.map((op, index) => {
                  return <option key={index}>{ op.name}</option>
              })
              }
      </select>
  )
}

export default InputSelectePrivate