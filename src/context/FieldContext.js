import React, {createContext, useState, useRef, useEffect} from 'react'
import Spiels from '../utils/Spiels'

const Context = createContext()

const FieldContext = ({children}) => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [allFieldSelected, setAllFieldSelected] = useState(Spiels.fields)
    const ref = useRef(selectedIndex)
    useEffect(() => {
        ref.current = selectedIndex // 1
    }, [selectedIndex])
    const handleFirstname = (event) => {
        let value = event.currentTarget.value
        const tempAllFieldSelected = [...allFieldSelected]
        const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]}
        const tempField = {...tempFieldSelected.fieldSettings}
        const userObject = { 
            firstname : value,
            lastname : tempField.userObject.lastname
        }

        const fieldSettings = { 
            userObject : userObject
        }
        tempFieldSelected.fieldSettings = fieldSettings
        tempAllFieldSelected[selectedIndex] =  tempFieldSelected
        setAllFieldSelected(tempAllFieldSelected)
        console.log(tempAllFieldSelected)
     }
     const handleLastname = (event) => {
        let value = event.currentTarget.value
        const tempAllFieldSelected = [...allFieldSelected]
        const tempFieldSelected = {...tempAllFieldSelected[selectedIndex]} 
        const tempField = {...tempFieldSelected.fieldSettings}
        const userObject = { 
            firstname : tempField.userObject.firstname,
            lastname : value
        }

        const fieldSettings = { 
            userObject : userObject
        }
        tempFieldSelected.fieldSettings = fieldSettings
        tempAllFieldSelected[selectedIndex] =  tempFieldSelected
        setAllFieldSelected(tempAllFieldSelected)
        console.log(tempAllFieldSelected)
     }
    return (
        <Context.Provider
        value={{
            selectedIndex, handleFirstname, handleLastname, allFieldSelected
        }}
        >{children}</Context.Provider>
    )
}

export {Context, FieldContext}