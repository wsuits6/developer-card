// importing react icons
import { FaLinux, FaShieldAlt } from "react-icons/fa"; //Import REACT ICONS  formt the Font Awesome class
import { SiReact} from "react-icons/si"; // Import React ICON from the Simple Icons FONTs 
import { MdOutlineAccountTree } from "react-icons/md"; // Import React  ICON fromt the Material Desing Fonts+

function  Skills() {
    return (
        <>
        {/**Data container */}
      <div className="skill-list">
        {/**Skill Set components  */}
        <div className="skills">
          
          {/**skilss */}
          <div className="skill">
            {/**react ICON  */}
            <FaLinux size={28}/>
            <h3>Linux</h3>
          </div>

          <div className="skill">
            {/**react ICON  */}
            <SiReact size={28}/>
            <h3>Frontend Development</h3>
          </div>

          <div className="skill">
            {/**react ICON  */}
            <MdOutlineAccountTree size={28} />
            <h3>Systems thinking</h3>
          </div>

          <div className="skill">
            {/**react ICON  */}
             <FaShieldAlt size={28} />
            <h3>Offensive Security</h3>
          </div>
        </div>
      </div>
        </>
    )
}

export default Skills;