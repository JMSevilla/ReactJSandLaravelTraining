import React from 'react'
import { appRouter } from './approuter'
import {Switch, Route} from 'react-router-dom'
import HomePage from '../pages/Home'
import About from '../pages/About'

const RouteWithLoad = ({component : Component, ...rest}) => {
    return (
        <> 
            <Route {...rest} render={props => (
                <>
                    <Component {...props} />
                </>
            )} />
        </>
    )
}


export default () => (
    <Switch>
        <RouteWithLoad exact path={appRouter.Homepage.path} component={HomePage} />
        <RouteWithLoad exact path={appRouter.About.path} component={About} />
    </Switch>
)