/**
 * Created by avishnikin on 12/21/2016.
 */
import { combineReducers } from 'redux'
import controlPanel from './controlPanel'
import folders from './folders'
import notices from './notices'
import search from './search'

export default combineReducers({
    controlPanel,
    folders,
    notices,
    search
})