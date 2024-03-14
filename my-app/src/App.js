import React,{ Component } from 'react'
import Car from './components/Car'
class App extends Component {
  render() {
    // create component called HelloWolrd
    // inside <h1>Hello world!<h1> in green
    // line #10 <HelloWorld />
    return (
      <div className="App">
        <h1>Hello world!</h1>
        <Car />
        <Car />
        <Car />

      </div>
    );
  }
}

export default App;
