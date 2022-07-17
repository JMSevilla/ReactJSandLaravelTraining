import React from 'react'
import { Card } from '@mui/material'

const BasicCard = ({children}) => { 
    return (
        <>
            <Card>
                {children}
            </Card>
        </>
    )
}

export default BasicCard

