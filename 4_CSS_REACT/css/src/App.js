import './App.css';
import MyComponent from './components/MyComponent';
import {useState} from "react";
import Title from './components/Title';

function App() {

  const n = 9
  const [name] = useState('Mattheus')
  const redTitle = false

  return (
    <div className="App">
      {/*CSS GLOBAL*/}
      <h1>React com CSS</h1>

      {/*CSS COMPONENT*/}
      <MyComponent />

      <p>Esse paragrafo é do app.js</p>

      {/*inline css*/}
      <p style={{color:'magenta',padding:"25px", borderTop: "2px solid red"}}>Elemento estillizado inline</p>

      <p style={{color:'magenta',padding:"25px", borderTop: "2px solid red"}}>Elemento estillizado inline</p>

      {/* CSS INLINE DINAMIC*/}
      <h2 style={n < 10 ? ({color:'purple'}):({color:'pink'})}>CSS Dinamic</h2>
      <h2 style={name ==="Mattheus" ? ({ color:"green", backgroundColor:"black"}): null}>CSS Dinamic</h2>
      

      {/*Classe dinamica*/}
      <h2 className={redTitle ? "red-title": 'title'}> Clase dinamica</h2>

      {/*CSS MODULES*/}
      <Title />
    </div>
  );
}

export default App;
