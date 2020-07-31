import React from 'react';

class Filter extends React.Component{

    render(){
        console.log(this.props)
        return(
            <div>
                <h1>Filter Hogs</h1>
                {
                    !this.props.showGreased ?
                    <button onClick={this.props.toggleGreased} >Show only greased hogs</button>
                    :
                    <button onClick={this.props.toggleGreased} >Show all hogs</button>
                    }
                <button onClick={this.props.sortByName} >Sort By Name</button>
                <button onClick={this.props.sortByWeight} >Sort By Weight</button>
            </div>
        )
    }
}

export default Filter;