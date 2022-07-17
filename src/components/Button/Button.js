import React from 'react'
import { Button } from '@mui/material'

const SimpleButton = (props) => {
    const { buttonName, onHandleClick, variant, style } = props

    return (
        <>
            <Button
            variant={variant}
            style={style}
            onClick={onHandleClick}
            >{buttonName}</Button>
        </>
    )
}

export default SimpleButton