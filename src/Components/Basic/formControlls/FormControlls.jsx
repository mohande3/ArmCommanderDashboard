import React from 'react'
import DatePicker from 'react-multi-date-picker'
import DatePickerHeader from 'react-multi-date-picker/plugins/date_picker_header'
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"

const Label = ({className='',id='',text='',htmlFor=''}) => {
    return (
        <label className={'form-label '+className} id={id} htmlFor={htmlFor}>{text}</label>
    ) 
}

// ================= TEXT =====================
const Input = ({className='',placeHolder='',type='',id=''}) => {
    return <input className={'form-control ' + className}
        id={id}
        placeholder={placeHolder} type={type} />
}
const InputText = ({ className = '', placeHolder = '',id=''}) => {
    return <Input className={className} placeHolder={placeHolder}
        type='text' id={id} />
}
const InputDatePicker = ({className=''}) => {
    return <div className={'datePicker '+className}>
        <DatePicker plugins={[<DatePickerHeader position='left' />]}
        calendar={persian }
        locale={persian_fa}
        inputClass='form-control'
        calendarPosition="bottom-right"/>
    </div>
}


export {Label,Input,InputText,InputDatePicker}