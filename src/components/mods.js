import React from "react";
import "../styles/counter.css";
class Mods extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      counter: 0 
    };
  }

  handleClick = (e) => {
    this.setState({ 
      counter: (this.state.counter += 1) 
    });
  };

  render() {
    return (
      <div className="content">
        <div className="container">
          <div className="counter row">
            <h1>
              Heritage mod + baking!
            </h1>
            <p> https://elizalzate.github.io/mods/heritage.js </p>
          </div>
          <button 
            className="btn btn-primary" 
            onClick={this.handleClick}
          >
            Thats cool!
          </button>
        </div>
      </div>
    );
  }
}

export default Mods;
