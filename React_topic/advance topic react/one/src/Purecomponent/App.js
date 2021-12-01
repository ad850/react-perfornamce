
import { PureComponent } from 'react';

//component render only first time when state is changed othervice not 

export class App extends PureComponent {

  constructor() {

    super();

    this.state = {

      count: 1
    }
  }

  render() {
    console.warn("render")
    return (
      <div>

        <h1>{this.state.count}</h1>

        <button onClick={() => this.setState({ count: 10 })}>Click</button>

      


      </div>
    )
  }
}

export default App
