import React, { Component } from "react";

class Filter extends Component {
    render() {
        const style= {
            margin: '25px',
            border: '1px solid black',
            padding: '30px'
        }

        return <div className="ui eight wide column" style={style}>
            <input
                name="isGoing"
                type="checkbox"
                onChange={this.props.toggleGreased} />
            Greased
            <br />
            <select onChange={this.props.handleSort}>
                <option value=''></option>
                <option value='weight'>Weight</option>
                <option value='name'>Name</option>
            </select>
        </div>
    }
}

export default Filter;
