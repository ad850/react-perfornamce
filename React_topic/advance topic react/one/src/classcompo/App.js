import React, { Component } from "react";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }
  
 Update=()=>{
   
    this.setState({

        count: this.state.count+1
    })

 }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>

        <button onClick={()=> this.Update()}>Click</button>
      </div>
    );
  }
}

export default App;
