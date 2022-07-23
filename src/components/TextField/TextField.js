import React from 'react'
import { TextField } from '@mui/material'

const BasicTextField = (props) => {
    const { type, style, onHandleChange, placeholder, value } = props

    return (
        <>
            <TextField
            type={type}
            style={style}
            onChange={onHandleChange}
            placeholder={placeholder}
            variant={'outlined'}
            value={value}
            ></TextField>
        </>
    )
}

export default BasicTextField