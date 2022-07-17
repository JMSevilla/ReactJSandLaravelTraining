import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import ApplicationStart from './router/index'
import { FieldContext } from './context/FieldContext'
const root = document.getElementById('root')

ReactDOM.render(
  <HashRouter>
    <FieldContext>
      <ApplicationStart/>
    </FieldContext>
  </HashRouter>,
  root
)