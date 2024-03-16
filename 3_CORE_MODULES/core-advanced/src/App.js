import './App.css';
import Dragon from './assets/img1.jpg'
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import { useState } from 'react';
import Fragment from './components/Fragment';
import ComponentPai from './components/ComponentPai';
import ExecuteFunction from './components/ExecuteFunction';
import UserDetails from './components/UserDetails';

function App() {

  const name = "Marcos"
  const [userName] = useState("Maria")
  const cars = [
    {brand:"GM", KM:12660, cor:"verde"},
    {brand:"Chevrolet", KM:8623, cor:"rosa"},
    {brand:"Honda", KM:9550, cor:"amarelo"},    
    {brand:"Fiat", KM:12660, cor:"preto"},    
    {brand:"Porshe", KM:2900, cor:"fuskia"},    
    {brand:"Kawasaki", KM:142220, cor:"marrom"},    
    {brand:"GM", KM:1222, cor:"cinza"}    
  ]

  const peoples = [
    {nome:"Ana",idade:11, profissao:"Professor"},
    {nome:"Bob",idade:12, profissao:"Sem trampo"},
    {nome:"Carl",idade:23, profissao:"bombeiro"},
    {nome:"David",idade:44, profissao:"Cameramen"},
    {nome:"Ellen",idade:15, profissao:"Developer"},
  ]

  const showMessage = () => {console.log('Father is callling')}
  return (
    <div className="App">
      <header className="App-header">
      <h1>Avançando no React</h1>

      {/*Imagem em public*/}
      <img src="/img1.jpg" alt="paladin dragonborn" />

      {/*Imagem em assets*/}
      <img src={Dragon} alt="dragon chubby" />

      <ManageData></ManageData>
      <ListRender></ListRender>
      <ConditionalRender></ConditionalRender>

      {/*Props*/}
      <ShowUserName name={name}></ShowUserName>
      <ShowUserName name={userName}></ShowUserName>

      {/*Destruct Props*/}
      <CarDetails brand="VW" KM={69000} cor="Preta" />
      <CarDetails brand="Ford" KM={29000} cor="Azul" />
      <CarDetails brand="Honda" KM={69000} cor="Branca" />

      {/* map cars*/}
      {cars.map((car)=> (<CarDetails brand={car.brand} KM={car.KM} cor={car.cor} />))}

      <Fragment name="MMAM"/>

      <ComponentPai>
        <p>componentFilho</p>
      </ComponentPai>

      <ExecuteFunction myFunction={showMessage}/>
      {peoples.map((people)=>(<UserDetails nome={people.nome} idade={people.idade} profissao={people.profissao}/>))}
      </header>
    </div>
  );
}

export default App;
