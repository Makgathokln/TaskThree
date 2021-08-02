import React  from "react";
import "./styler.css";

const profile = () => {
    return (
        <>
 <div className="pro-con">

     <div className="cont">

     <h1 className="Me">Contact Me</h1>
<br/>
     <div className="contact">

         <div className="coni">
     <img src={require("../images/phone.jpg").default}/>
    <h3>+2779 247 6117</h3>
     </div>

     
     <div className="coni">
     <img src={require("../images/email.jpg").default}/>
    <h3>Makgathokln@gmail.com</h3>
     </div>

     <div className="coni">
     <img src={require("../images/map.jpg").default}/>
    <h3>141 Zone F Lebcow </h3>
     </div>
</div>
</div>
</div>


                </>
    )
}

export default profile