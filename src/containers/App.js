/**
 * Created by avishnikin on 12/20/2016.
 */
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ControlPanel from '../components/controlPanelComponent'
import Folders from '../components/folderComponent'
import Notices from '../components/noticeComponent'
import Search from '../components/searchComponent'
import * as folderActions from '../actions/FolderActions'

class App extends Component {
    render() {

        const { controlPanel, folders,notices, search } = this.props
        const { setFolder } = this.props.pageActions

        return <div className="mainContainer">
                    <ControlPanel add={controlPanel.add} update={controlPanel.update} deleteItem={controlPanel.deleteItem}  />
                    <Folders folderName={folders.folderName} subName={folders.subName} setFolder={setFolder}/>
                    <Notices noticeTitle={notices.noticeTitle} noticeDetail={notices.noticeDetail}/>
                    <Search searchName={search.searchName} />
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