import React from 'react';
import HogDetails from './HogDetails';
import { render } from 'react-dom';

class HogCard extends React.Component {

    constructor(){
        super()
        this.state = {
            showDetails: false
        }
    }

    toggleHogDetails = () => {
        console.log('hog')
        this.setState({
            showDetails: !this.state.showDetails
        })
    }

    render(){
        console.log(this.props.hog)
        let pigName = this.props.hog.name.toLowerCase().split(' ').join('_');
        let pigImage = require(`../hog-imgs/${pigName}.jpg`)
        return(
            <div className="pigTile" onClick={() => this.toggleHogDetails()}>
                <img src={pigImage} />
                <h1>{this.props.hog.name}</h1>
                {
                    this.state.showDetails ? 
                    <HogDetails hog={this.props.hog} />
                    :
                    null
                }
            </div>
        )
    }
}

export default HogCard;