import React, { Component } from 'react'

class GreetClassProps extends Component {
    render() {
        const {name, heroName} = this.props;
        // const {state1, state2} = this.state;
        return (
            <div>
                <h1>Welcom {name} aka {heroName}</h1>
            </div>
        )
    }
}

export default GreetClassProps
