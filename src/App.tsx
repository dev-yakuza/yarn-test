import React from 'react';
import logo from './logo.svg';
import './App.css';

interface Props {
  text: string;
}
const Label = ({text}: Props) => {
  return <p>{text}</p>
}
const App = () => {
  return (
    <Label text="Hello world!"/>
  );
}

export default App;
