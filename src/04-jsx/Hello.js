import React from 'react'

const Hello = () => {
    // return (
    //     <div className='dummy'>
    //         <h1>Hey Steve</h1>
    //     </div>
    // )

    return React.createElement('div', {id: 'hello', className: 'dummy'}, React.createElement('h1', null, 'Heya Stevie'))
}

export default Hello
