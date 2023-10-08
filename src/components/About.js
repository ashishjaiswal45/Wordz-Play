import React from "react";

export default function About(props) {
    // let [myStyle, setMyStyle] = useState({
    //     color: "#042743",
    //     backgroundColor: "white"
    // })

    let myStyle = {
      color : props.mode==="dark"?"white":"#042743",
      backgroundColor : props.mode==="dark"?"#042743":"white"
    }

    // const [btnText, setBtnText] = useState("Enable Dark Mode")

    // const toggleStyle = () =>{
    //     if(myStyle.color==='#042743'){
    //         setMyStyle({
    //             color: "white",
    //             backgroundColor: "#042743"
    //         })
    //         setBtnText("Enable Light Mode")
    //     }else{
    //         setMyStyle({
    //             color: "#042743",
    //             backgroundColor: "white"
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    // }

  return (
    <div classNameName="container" style={myStyle}>
      <h1 className="my-5">About Us</h1>
      <div className="accordion" id="accordionExample" >
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              About the App
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>
                Text Transformation and Analysis Web App: Built with HTML, CSS,
                Bootstrap, and ReactJS.
              </strong>
              <br/> Accepts text input and offers conversion to uppercase,
              lowercase, or title case. 
              <br /> Provides word/character count,
              estimated reading time, and a text preview, making it a versatile
              tool for text manipulation and analysis.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              About Me
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              My name is <strong>Ashish Jaiswal.</strong>
             <br /> I'm a computer science graduate student and i have made this app while learning reactjs.

            </div>
          </div>
        </div>
      </div>
      {/* <div className="my-3 mx-3">
      <button type="button" class="btn btn-secondary" onClick={toggleStyle}>{btnText}</button>
      </div> */}
    </div>
  );
}
