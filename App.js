import react from 'react'
import reactDOM from 'react-dom'
import './App.css'
import Carroslista from './Carroslista'
import Marveric from './Marveric'


function App() {
  return (
    <div className="App">
      <header className="App-header">
     
       <img src="info.jpeg"/>
       <Carroslista/>
       <Marveric/>
       
      </header>
    </div>
  );
}

export default App;
