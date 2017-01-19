/**
 * Created by avishnikin on 1/17/2017.
 */
import React from 'react'


export default React.createClass({
    render() {
        return (
            <div className="corporateName">
                <h2>{this.props.params.corporateName}</h2>
            </div>
        )
    }
})