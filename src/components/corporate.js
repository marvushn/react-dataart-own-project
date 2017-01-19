import React, { PropTypes, Component } from 'react'
import NavLink from './NavLink'
import { browserHistory } from 'react-router'
export default class corporate extends Component {

    handleSubmit(event) {
        event.preventDefault()
        const corporateName = event.target.elements[0].value
        const repo = event.target.elements[0].value
        const path = `/corporate/${corporateName}/${repo}`
        browserHistory.push(path)
        console.log(path)
    }

    render() {
        return <div className="corporate">
            <h2>Corporate</h2>
            <ul>
                <li>
                    <NavLink to="/corporate/reactjs/react-router">React Router</NavLink>
                </li>
                <li>
                    <NavLink to="/corporate/facebook/react">React Router facebook</NavLink>
                </li>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="corporateName"/> / {' '}
                        <input type="text" placeholder="repo"/>{' '}
                        <button type="submit">Go</button>
                    </form>
                </li>
            </ul>
            {this.props.children}
        </div>
    }
}