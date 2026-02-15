//CSS Importation
import "./App.css";

//Importing component
import Avater  from "./components/Avater";
import Intro  from "./components/Intro";
import Skills from "./components/Skills"



//========================

function App() {
  return (
    <> {/**Empty DIV for all main ELEMENTS */}
    <div className="card"> 
      <Avater />
      <Intro />
      <Skills />
    </div>
    </>
  )
}

{/**Exporting soo it can Be used by index.js */}
export default App;