/**
 * Created by avishnikin on 12/20/2016.
 */
import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import App from './containers/App'
import configureStore from './store/configureStore'

const store = configureStore()

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App} />
        </Router>
    </Provider>,
    document.getElementById('root')
)
