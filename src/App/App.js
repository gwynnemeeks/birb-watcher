import React from 'react';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>Birb Watcher</h2>
        <button className="btn btn-secondary">
        <i className="fab fa-earlybirds fa-lg"></i>
          </button>
      </div>
    );
  }
}

export default App;
