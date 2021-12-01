import React, { Component } from 'react'

export class Errorbound extends Component {

    constructor() {
        super()

        this.state = {

            haserr: null

        }


    }
    static getDerivedStateFromError() {

        return { haserr: true }
    }

    render() {
        return (
            <div>

                {

                    this.state.haserr ? <h1>Somthing went wrong</h1> : this.props.children
            }

            </div>
        )
    }
}

export default Errorbound
