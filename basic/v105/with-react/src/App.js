import logo from './logo.svg';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import './App.css'
import { useState } from 'react';

function App() {
  const [Value , SetValue] = useState(0)
  return (
    <div className="App">
      <Navbar Logotext = "Abhishek Sharma"/>
      <div className="count">{Value}</div>
      <button onClick={()=>{SetValue(Value + 1)}}>click me</button>
      <Footer/>
    </div>
  );
}

export default App;
