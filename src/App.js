import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  state = { advice: '' };

  componentDidMount() {
    this.fetchAdvice();
  }
  fetchAdvice = ()  => {
    axios.get("https://api.adviceslip.com/advice")
    .then((response)  => {
        const {advice} = response.data.slip;

        this.setState({advice: advice})

    })
    .catch((error)  => {
        console.log(error);
        
    });
  }
  render() {
    const {advice} = this.state;
    return (
        
         
     <div className='app'>
        <div className='card'>
        <div className='first'>
            <h1 className='logo'>Advice Genius</h1></div> 
       <h2 className='heading'>{advice}</h2>
        <button className='button' onClick={this.fetchAdvice}>
            <span>GIVE ME ADVICE!!</span>
        </button>
        </div>
        </div>
    );
  }
}

export default App;