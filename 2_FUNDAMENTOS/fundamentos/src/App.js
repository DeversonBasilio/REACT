// componenets
import FirstComponent from './componenets/FirstComponent'
import TemplateExpressions from './componenets/TempleteExpressions'
import MyComponenet from './componenets/MyComponent';
import Events from './componenets/Events';
import Challenge from './componenets/Challenge';

// Styles
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Fundamentos React</h2>

        <FirstComponent></FirstComponent>
        <TemplateExpressions></TemplateExpressions>
        <MyComponenet></MyComponenet>
        <Events></Events>

        <Challenge>s</Challenge>

      </header>
    </div>
  );
}

export default App;