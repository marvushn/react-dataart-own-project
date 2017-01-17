import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

export default class corporate extends Component {
    render() {
        return <div className="corporate">
            <h2>Corporate</h2>
            <ul>
                <li>
                    <Link to="/corporate/reactjs/react-router">React Router</Link>
                </li>
                <li>
                    <Link to="/corporate/facebook/react">React Router</Link>
                </li>
            </ul>
        </div>
    }
}