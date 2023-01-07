import React from 'react'
import DatePicker from 'react-multi-date-picker'
import DatePickerHeader from 'react-multi-date-picker/plugins/date_picker_header'
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import InputSelectePrivate from './private/InputSelecte'

const Label = ({className='',id='',text='',htmlFor=''}) => {
    return (
        <label className={'form-label '+className} id={id} htmlFor={htmlFor}>{text}</label>
    ) 
}

// ================= TEXT =====================
const Input = ({ className = '', placeHolder = '', type = '', id = '',
    value='',
    onHandleChangeValue }) => {
    
    const HandleChangeValue = (e) => {
        if (onHandleChangeValue === null || 
            onHandleChangeValue === undefined) {
            console.warn(`Not exist onHandleChangeValue for ${id} controll`);
            return;
        }
        onHandleChangeValue(e.target.value)
    }
    return <input
        className={'form-control ' + className}
        id={id}
        value={value}
        onChange={HandleChangeValue}
        placeholder={placeHolder} type={type} />
}
const InputText = ({ className = '', placeHolder = '', id = '',
    value='',
    onHandleChangeValue }) => {
    console.log('CONTROLLER',value)
    return <Input className={className} placeHolder={placeHolder}
        type='text' id={id} value={value} onHandleChangeValue={onHandleChangeValue} />
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
const InputSelecte = ({className='',id='',options=[]}) => {
    return <InputSelectePrivate className={className} id={id} options={options} />
}

export {Label,Input,InputText,InputDatePicker,InputSelecte}