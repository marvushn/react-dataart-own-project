/**
 * Created by avishnikin on 12/22/2016.
 */
import React, { PropTypes, Component } from 'react'

export default class controlPanel extends Component {
    render () {
        const { add, update, deleteItem } = this.props
        return <div>
            <div className="controlButtons">
                <p> { add } </p>
                <img src="bla.jpg" />
                <p> { update } </p>
                <img src="bla.jpg" />
                <p> { deleteItem } </p>
                <img src="bla.jpg" />
            </div>
        </div>
    }
}

/*controlPanel.propTypes = {
    add: PropTypes.string.isRequired,
    update: PropTypes.string.isRequired,
    deleteItem: PropTypes.string.isRequired
}*/