
import About from './About'
import Contact from "./Contact"
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Errpage from './Errpage';
import Service from './Service';
import User from './User';
import Navbar from './Navbar';

//when component call everytime the component re-render but with render thats not occure
function App() {
  return (<>

    <Navbar />

    <Switch>

      <Route exact path="/about" render={() => <About name={"Aditya"} />} />
      <Route path="/contact" render={Contact} />
      <Route path="/service" component={Service} />
      <Route path="/user/:name" component={User} />
      <Route path="*" component={Errpage} />

    </Switch>

  </>);
}

export default App;
