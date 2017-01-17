/**
 * Created by avishnikin on 1/16/2017.
 */
import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
    render() {
        return <Link {...this.props} activeClassName="active"/>
    }
})