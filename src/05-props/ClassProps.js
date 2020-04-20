import React, { Component } from 'react'

class ClassProps extends Component {
    render() {
        return (
            <div>
                <h1>Welcom {this.props.name} aka {this.props.heroName}</h1>
                {this.props.children}
            </div>
        )
    }
}

export default ClassProps
