import React from 'react'
import HogCard from './HogCard'

class HogContainer extends React.Component{
    renderHogs = () => {
        return this.props.hogs.map(hogObj => {
            return <HogCard hog={hogObj} key={hogObj.name}/>
        })
    }

    render() {
        return <div className="ui grid container">
            {this.renderHogs()}
        </div>
    }
}

// const HogContainer = props => {
//     return <div className="ui grid container">
//         {props.hogs.map(hogObj => {
//             return <HogCard hog={hogObj} key={hogObj.name} />
//         })}
//              {this.renderHogs()}
//         </div>
// }

export default HogContainer