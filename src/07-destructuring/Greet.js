import React from 'react'

// There's two ways to destructure props
// const Greet = ({name, heroName}) => {
const Greet = props => {
    const {name, heroName} = props
        return (
            <div>
                <h1>Welcome {name} aka {heroName}</h1>
            </div>
        )
    
}

export default Greet