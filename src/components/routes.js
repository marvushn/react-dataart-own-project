/**
 * Created by avishnikin on 1/19/2017.
 */
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../containers/App'
import ControlPanelComponent from './controlPanelComponent'
import Corporate from './corporate'
import Repo from './Repo'
import SearchComponent from './searchComponent'
import Home from './home'
import FolderComponent from './folderComponent'
import NoticeComponent from './noticeComponent'
import OtherActivities from './other-activities'
import PrivateFolder from './private-folder'

module.exports = (
    <Route path="/" component={App}>
        <IndexRoute components={Home}/>
        <Route path="/corporate" component={Corporate}>
            <Route path="/corporate/:userName/:corporateName" component={Repo}/>
        </Route>
        <Route path="/otherActivities" component={OtherActivities}/>
        <Route path="/privateFolder" component={PrivateFolder}/>
    </Route>

)