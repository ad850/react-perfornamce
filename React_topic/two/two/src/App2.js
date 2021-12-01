import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home'
import Contact from './Contact';


const App2 = () => {


    return (<>



        <Switch>

            <Route path="/" component={Home} />
            <Route path="/contact" component={Contact} />


        </Switch>


    </>)
}

export default App2;


