import React,{ Component } from 'react'
import HelloWolrd from './components/HelloWolrd'

class App extends Component {
  render() {
    // create component called HelloWolrd
    // inside <h1>Hello world!<h1> in green
    // line #10 <HelloWorld />
    return (
      <div className="App">
        <HelloWolrd/>
      </div>
    );
  }
}

export default App;
