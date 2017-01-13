/**
 * Created by avishnikin on 12/22/2016.
 */
import React, { PropTypes, Component } from 'react'

export default class notices extends Component {
    render () {
        const { noticeTitle,noticeDetail } = this.props
        return <div>
                <table className="noticesContainer">
                    <tbody>
                    <tr>
                        <td> { noticeTitle } </td>
                        <td> { noticeDetail } </td>
                    </tr>
                    </tbody>
                </table>
        </div>
    }
}


/*Notice.propTypes = {
    noticeTitle: PropTypes.string.isRequired,
    noticeDetail: PropTypes.string.isRequired
}*/