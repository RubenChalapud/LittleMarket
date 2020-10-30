import Nav from "./Componets/Nav/Nav.js"
import './App.css';
import Banner from "./Banner.png"

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
       </header>
    </div>
  );
}

export default App;
