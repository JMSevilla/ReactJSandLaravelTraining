import React, {useState, useContext, useCallback} from 'react'
import ButtonAppBar from '../components/Appbar/Appbar'
import { Container, CardContent, Typography,
Grid, CardActions } from '@mui/material'
import BasicCard from '../components/Card/Card'
import BasicTextField from '../components/TextField/TextField'
import SimpleButton from '../components/Button/Button'
import { useHistory } from 'react-router-dom'
import { appRouter } from '../router/approuter'
import { Context } from '../context/FieldContext'



const HomePage = () => {
    const history = useHistory()
    const contextValues = useContext(Context)
    const { handleFirstname, handleLastname, allFieldSelected, selectedIndex } = contextValues
    const objectUser = { 
        firstname : '',
        lastname : ''
    }
    const [state, setState] = useState(objectUser)
    const customStyle = {
        width: '100%',
        marginTop : '10px',
        marginBottom : '10px'
    }
    const customStyleButton = {
        float : 'right', marginTop: '10px', marginBottom: '10px'
    }
    

    const onSubmit = () => {
        history.push(appRouter.About.path)
        // if(!state.objectUser.firstname) {
        //     alert("Empty firstname")
        //     return false
        // } else if(!state.objectUser.lastname) {
        //     alert("Empty lastname")
        //     return false
        // } else {
        //     //client request
        // }
    }

    const onSubmission = useCallback((params) => {
        alert(params)
    }, [])

    const renderHelloworld = () => {
        return(
            <>
                <h5>Hello world</h5>
            </>
        )
    }
    return (
        <>
            <ButtonAppBar title={'Navigation Bar'} />
            <Container fixed style={{marginTop : '100px'}}>
                <BasicCard children={
                    <CardContent>
                       <Typography gutterBottom>
                        User Form 
                        </Typography>

                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={6}>
                                <BasicTextField 
                                type={'text'}
                                style={customStyle}
                                onHandleChange={(e) => handleFirstname(e)}
                                placeholder={'Enter firstname'}
                                value={allFieldSelected[selectedIndex].fieldSettings.userObject.firstname}
                                />
                            </Grid>
                            <Grid item xs={6}>
                            <BasicTextField 
                                type={'text'}
                                style={customStyle}
                                onHandleChange={(e) => handleLastname(e)}
                                placeholder={'Enter lastname'}
                                value={allFieldSelected[selectedIndex].fieldSettings.userObject.lastname}
                                />
                            </Grid>
                        </Grid>
                        <SimpleButton
                            buttonName={'Submit'}
                            variant={'outlined'}
                            style={customStyleButton}
                            onHandleClick={() => onSubmission("hello world")}
                        />
                    </CardContent>
                }/>
            </Container>
        </>
    )
}

export default HomePage