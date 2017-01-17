/**
 * Created by avishnikin on 12/20/2016.
 */
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import ControlPanel from '../components/controlPanelComponent'
import Folders from '../components/folderComponent'
import Notices from '../components/noticeComponent'
import Search from '../components/searchComponent'
import Corporate from '../components/corporate'
import OtherActivities from '../components/other-activities'
import Private from '../components/private-folder'
import * as folderActions from '../actions/FolderActions'
import NavLink from '../components/NavLink'

class App extends Component {
    render() {

        const { controlPanel, folders,notices, search } = this.props
        const { setFolder } = this.props.pageActions

        return <div className="mainContainer">
                    <ControlPanel add={controlPanel.add} update={controlPanel.update} deleteItem={controlPanel.deleteItem}  />
                    <Folders folderName={folders.folderName} subName={folders.subName} setFolder={setFolder}
                    />
                    <Notices noticeTitle={notices.noticeTitle} noticeDetail={notices.noticeDetail}/>
                    <Search searchName={search.searchName} />
                    <ul role="nav">
                        <li><NavLink to="/corporate">Corporate</NavLink></li>
                        <li><NavLink to="/otherActivities">OtherActivities</NavLink></li>
                        <li><NavLink to="/private">Private</NavLink></li>
                    </ul>
                    {/*<Corporate/>
                    <OtherActivities/>
                    <Private/>*/}
                    {this.props.children}

                </div>
            }
}

function mapStateToProps (state) {
    return {
        controlPanel: state.controlPanel,
        folders: state.folders,
        notices: state.notices,
        search: state.search
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(folderActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)