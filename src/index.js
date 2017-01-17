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
import corporate from './components/corporate'
import otherActivities from './components/other-activities'
import privateFolder from './components/private-folder'
import Repo from './components/Repo'

const store = configureStore()

render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <Route path="/corporate" component={corporate}/>
                <Route path="/corporate/:userName/:corporateName" component={Repo}/>
                <Route path="/otherActivities" component={otherActivities}/>
                <Route path="/private" component={privateFolder}/>
            </Route>
        </Router>
    </Provider>),
    document.getElementById('root'))

