import React from 'react';
import HogCard from './HogCard';
import Filter from './Filter';

class HogContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      hogs: [],
      showGreased: false
    }
  }
  componentDidMount(){
    this.setState({
      hogs: this.props.hogs
    })
  }

  toggleGreased = () => {
    let hogs;
    if(this.state.showGreased === false){
      hogs = this.props.hogs.filter(hog => hog.greased === true);
    } else {
      hogs = this.props.hogs;
    }
    this.setState({
        hogs: hogs,
        showGreased: !this.state.showGreased
    })
}

  sortByName = () => {
    console.log('name');
    const namedHogs =  this.props.hogs.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    this.setState({
      hogs: namedHogs
    })
  }

  sortByWeight = () => {
    console.log('weight');
    const heavyHogs = this.props.hogs.sort((a, b) => {
        return a.weight - b.weight;
      });
    this.setState({
      hogs: heavyHogs
    }) 
  }

  renderHogCards = () => {
    return this.state.hogs.map(hog => {
      return(
        <div className="indexWrapper" id={hog.id}>
          <HogCard key={hog.id} hog={hog}/>
        </div>
      )
    })
  }

  render() {
    return (
        <div>
          <h1>HOGS</h1>
          <Filter hogs={this.props.hogs} showGreased={this.state.showGreased} toggleGreased={this.toggleGreased} sortByName={this.sortByName} sortByWeight={this.sortByWeight}/>
          {this.renderHogCards()}
        </div>
    );
  }
}

export default HogContainer;
