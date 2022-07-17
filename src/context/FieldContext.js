import React, {createContext, useState} from 'react'

const Context = createContext()

const FieldContext = ({children}) => {
    
    return (
        <Context.Provider
        value={{
        }}
        >{children}</Context.Provider>
    )
}

export {Context, FieldContext}