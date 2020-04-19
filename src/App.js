import React from 'react';
import HelloWorld from './01-hello-world/HelloWorld'
import Greet from './02-functional-components/Greet'
import Welcome from './03-class-components/Welcome'
import Hello from './04-jsx/Hello'
import './App.css';

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <Greet name='Steve'/>
      <Welcome />
      <Hello />
    </div>
  );
}

export default App;
