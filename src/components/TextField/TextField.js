import React from 'react'
import { TextField } from '@mui/material'

const BasicTextField = (props) => {
    const { type, style, onHandleChange, placeholder } = props

    return (
        <>
            <TextField
            type={type}
            style={style}
            onChange={onHandleChange}
            placeholder={placeholder}
            variant={'outlined'}
            ></TextField>
        </>
    )
}

export default BasicTextField