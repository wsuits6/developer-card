//Avater image component

//Importing Image from Public
import avater from "../assets/wsuits6.png"
function  Avater() {
    return (
        <>
        <div className="avater-component">
            {/**Avater Component goes here */}
            <img
            src={avater}
            alt="WSUITS6-image"
            //class for styling
            // className="avater
            >
            </img>
            </div>
        </>
    )
}

export default Avater;