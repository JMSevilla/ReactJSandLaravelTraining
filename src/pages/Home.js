import React, {useState} from 'react'
import ButtonAppBar from '../components/Appbar/Appbar'
import { Container, CardContent, Typography,
Grid, CardActions } from '@mui/material'
import BasicCard from '../components/Card/Card'
import BasicTextField from '../components/TextField/TextField'
import SimpleButton from '../components/Button/Button'
import { useHistory } from 'react-router-dom'
import { appRouter } from '../router/approuter'


const HomePage = () => {
    const history = useHistory()
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
    
    const handleFirstname = event => {
        let value = event.currentTarget.value
        if(!value) {
            setState(prevState => {
                let objectUser = Object.assign({}, prevState.objectUser)
                objectUser.firstname = ""
                return { objectUser }
            })
            return false //1 item
        } else {
            setState(prevState => {
                let objectUser = Object.assign({}, prevState.objectUser)
                objectUser.firstname = value
                return { objectUser }
            })
        }
    }
    const handleLastname = event => {
        let value = event.currentTarget.value
        if(!value) {
            setState(prevState => {
                let objectUser = Object.assign({}, prevState.objectUser)
                objectUser.lastname = ""
                return { objectUser }
            })
            return false
        } else {
            setState(prevState => {
                let objectUser = Object.assign({}, prevState.objectUser)
                objectUser.lastname = value
                return { objectUser }
            })
          
        }
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
                                onHandleChange={handleFirstname}
                                placeholder={'Enter firstname'}
                                />
                            </Grid>
                            <Grid item xs={6}>
                            <BasicTextField 
                                type={'text'}
                                style={customStyle}
                                onHandleChange={handleLastname}
                                placeholder={'Enter lastname'}
                                />
                            </Grid>
                        </Grid>
                        <SimpleButton
                            buttonName={'Submit'}
                            variant={'outlined'}
                            style={customStyleButton}
                            onHandleClick={onSubmit}
                        />
                    </CardContent>
                }/>
            </Container>
        </>
    )
}

export default HomePage