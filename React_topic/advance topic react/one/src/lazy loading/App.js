import React, { Component, Suspense, lazy } from 'react'



const Home = lazy(() => import('./Home'))


 class App extends Component {
    render() {
        return (
            <div>

                <Suspense fallback={<h1>Please wait...</h1>}>

                    <Home />

                </Suspense>

            </div>
        )
    }
}

export default App
