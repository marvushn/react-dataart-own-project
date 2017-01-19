/**
 * Created by avishnikin on 12/20/2016.
 */
import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router,  browserHistory } from 'react-router'

import configureStore from './store/configureStore'

import routes from './components/routes'

const store = configureStore()

render((
    <Provider store={store}>
        <Router routes={routes} history={browserHistory}/>
    </Provider>),
    document.getElementById('root'))

