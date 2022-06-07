import logo from './logo.svg';
import './App.css';
import React from 'react';

class Timer extends React.Component {
    constructor( props ) {
        super( props )
        this.state = {
            time: 0
        };
    }
    tick( ) {
        this.setState( {
            time: this.state.time + 1
        } );
    }
    componentDidMount( ) {
        this.interval = setInterval( ( ) => this.tick( ), 1000 );
    }

    componentWillUnmount( ) {
        clearInterval( this.interval );
    }
}

function App( ) {
    return (
        <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Seconds: 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    );
}

export default App;
