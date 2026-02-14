// importing react icons
import { FaLinux, FaBook, FaShieldAlt } from "react-icons/fa";
import { SiReact, SiJavascript } from "react-icons/si";
import { MdOutlineAccountTree } from "react-icons/md";

//CSS Importation
import "./App.css";

//Importing Image from Public
import avater from "./assets/wsuits6.png"

//=======================================
function App() {
  return (
    <>
    <div className="card"> 
      <div className="avater-component">
        {/**Avater Component goes here */}
        <img
        src={avater}
        alt="WSUITS6-image"
        //class for styling
        className="avater"
        >
        </img>
      </div>

      {/**Data container */}

      <div className="data">
        <div className="intro-components">
          <h1 className="name"> Alhassan Osman Wunpini - WSUITS6</h1>
          <h2 className="Bio">
            Builder, strategic thinker, and learning machine. Not an entertainer or motivational speaker. Every action serves authority, recruitment, or learning.
          </h2>
        </div>

        {/**Skill Set components  */}
        <div className="skillset-container">
          
          {/**skilss */}
          <div>
            {/**react ICON  */}
            <FaLinux size={28}/>
            <h3>Linux</h3>
          </div>

          <div>
            {/**react ICON  */}
            <SiReact size={28}/>
            <h3>Frontend Development</h3>
          </div>

          <div>
            {/**react ICON  */}
            <MdOutlineAccountTree size={28} />
            <h3>Systems thinking</h3>
          </div>

          <div>
            {/**react ICON  */}
             <FaShieldAlt size={28} />
            <h3>Offensive Security</h3>
          </div>

          <div>
            {/**react ICON  */}
            <FaBook size={28} />
            <h3>Book Writing</h3>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App;