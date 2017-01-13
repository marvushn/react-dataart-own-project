/**
 * Created by avishnikin on 12/22/2016.
 */
import React, { PropTypes, Component } from 'react'

export default class search extends Component {
    render () {
        const { searchName } = this.props
        return <div>
            <div className="searchContainer">
                <form>
                    Search: <input type="text" name="simpleSearch" value={ searchName }></input>
                </form>
            </div>
        </div>
    }
}
