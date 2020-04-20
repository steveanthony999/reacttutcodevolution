import React, { Component } from 'react'
import Counter from './Counter'

class State extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Welcome Visitor'
        }
    }

    changeMessage() {
        this.setState({
            message: 'BuhBye Shmoe'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>BUTTON</button>
                <Counter />
            </div>
        )
    }
}

export default State
