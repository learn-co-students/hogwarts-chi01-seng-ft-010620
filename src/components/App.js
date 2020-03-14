import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
// import HelloWorld from "./HelloWorld";
import HogContainer from "./HogContainer";
import Filter from "./Filter";

class App extends Component {
  constructor() {
    super()
    const updatedHogs = hogs.map(hog => {
      return {
        ...hog,
        isHidden: false
      }
    })

    this.state = {
      hogs: updatedHogs,
      filter: {
        showGreased: false,
        sortBy: ''
      }
    }
  }

  toggleGreased = (e) => {
    this.setState({
      filter: {
        ...this.state.filter,
        showGreased: e.target.checked
      }
    })
  }

  handleSort = (e) => {
    this.setState({
      filter: {
        ...this.state.filter,
        sortBy: e.target.value
      }
    })
  }

  hideHog = (name) => {
    const updatedHogs = this.state.hogs.map(hog => {
      if (hog.name !== name) {
        return hog
      } else {
        return {
          ...hog,
          isHidden: true
        }
      }
    })
    this.setState({
      hogs: updatedHogs
    })
  }

  findHogs = () => {
    // if (this.state.filter.showGreased) {
    //   const filteredHogs = this.state.hogs.filter(hog => {
    //     return hog.greased
    //   })
    //   return filteredHogs
    // } else {
    //   return this.state.hogs
    // }

    let filteredHogs = this.state.hogs

    if (this.state.filter.showGreased) {
      filteredHogs = this.state.hogs.filter(hog => {
        return hog.greased
      })
    }

    if (this.state.filter.sortBy === 'weight') {
      filteredHogs = filteredHogs.sort(function (a, b) {
        return a.weight - b.weight;
      });
    } else if (this.state.filter.sortBy === 'name') {
      filteredHogs = filteredHogs.sort(function (a, b) {
        const nameA = a.name.toUpperCase(); 
        const nameB = b.name.toUpperCase(); 
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      });
    }
    return filteredHogs
  }

  render() {
    console.log(this.state.hogs)
    const { hogs } = this.state
    return (
      <div className="App">
        <Nav />
        <Filter toggleGreased={this.toggleGreased} handleSort={this.handleSort}/>
        <HogContainer hogs={this.findHogs()} hideHog={this.hideHog}/>
      </div>
    );
  }
}

export default App;
