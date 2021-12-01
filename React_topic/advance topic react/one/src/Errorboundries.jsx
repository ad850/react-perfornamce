import React, { Component } from 'react'

export class Errorboundries extends Component {

    constructor() {

        super()

        this.state = {

            hasError: false

        }


    }

    static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }


    render() {
        return (
            <div>

                {

                    this.state.hasError ? <h1>Something went wrong.</h1> : this.props.children
                }

            </div>
        )
    }
}

export default Errorboundries
