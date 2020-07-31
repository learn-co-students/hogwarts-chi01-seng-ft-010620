import React from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <HogContainer hogs={hogs} />
      </div>
    );
  }
}

export default App;
