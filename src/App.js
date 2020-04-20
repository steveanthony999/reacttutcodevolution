import React from 'react';
import HelloWorld from './01-hello-world/HelloWorld'
import Greet from './02-functional-components/Greet'
import Welcome from './03-class-components/Welcome'
import Hello from './04-jsx/Hello'
import Props from './05-props/Props'
import ClassProps from './05-props/ClassProps'
import State from './06-state/State'
import GreetDestructure from './07-destructuring/Greet'
import GreetClassDestructure from './07-destructuring/GreetClassDestructure'
import FunctionClick from './08-events/FunctionClick'
import ClassClick from './08-events/ClassClick'
import './App.css';

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <Greet name='Steve'/>
      <Welcome />
      <Hello />
      <Props name='Steve-O' heroName='Fartman'><button>Ima Butt</button></Props>
      <Props name='Erlamd'>These are children props</Props>
      <ClassProps name='Toon' heroName='Toonie'>Child of class component</ClassProps>
      <State />
      <GreetDestructure name='Bootybutt' heroName='TheButtyBoot' />
      <GreetClassDestructure name='Bootybutt' heroName='TheButtyBoot' />
      <FunctionClick />
      <ClassClick />
    </div>
  );
}

export default App;
