import React from 'react';
import Greeting from './Greeting';
import MoviesPanel from './MoviesPanel';

export default class MainContent extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      counter: 0,
      username: process.env.GREETING_NAME
    };
  }

  handleIncrement = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({ counter: prevState.counter - 1 }));
  };

  render () {
    console.log(JSON.stringify(process.env));
    return (
      <div>
        <Greeting username={this.state.username} />
        <br />
        <div className="counter">
          <button type="button" onClick={this.handleDecrement} className="counterButton"> - </button>
          <h3>Counter: {this.state.counter}</h3>
          <button type="button" onClick={this.handleIncrement} className="counterButton"> + </button>
        </div>
        <br/>
        <MoviesPanel/>
      </div>
    );
  }
}
