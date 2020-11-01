import Nav from "./Componets/Nav/Nav.js"
import BotonesInicio from "./Componets/Inicio/Botones-Inicio/Botones-Inicio.js"
import './App.css';
import Banner from "./Banner.png"
import BotonesIncio from "./Componets/Inicio/Botones-Inicio/Botones-Inicio.js";

function App() {
  return (
    <div className="App">
       <nav class="o-nav">
         <Nav></Nav>
       </nav>
       <header>
         <div className="o-banner">
           <img className="o-img-banner" src={Banner} alt="Little Market"/>
         </div>
         <BotonesIncio></BotonesIncio>
       </header>
    </div>
  );
}

export default App;
