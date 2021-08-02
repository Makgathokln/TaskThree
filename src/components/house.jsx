import React, {Component} from "react";
import "./styler.css";

export default class house extends Component{
    render(){
        return (
            <>

<div class="banner-container">
        <div class="banner-details-container">
            <div class="banner-details">
                <h1 className="Welcome">Welcome to my React Task 3</h1><br/>
                <p>Good day Tyson, please be merciful and give me a 100%. React is super hard please extend 
                    another week for us so we can get used to the environment and learn more.
                </p> <br/>
                <p>On behalf of the code tribers thank you for granting us the opportunity for being part
                    of code tribe 2021.
                </p>
            </div>
            
        </div>
    </div>  
<br/>
    <div className="sec">
        <h1 className="h1">Skills already gathered</h1>
<br/>
        <fieldset>
            <legend><h3>Html5 </h3></legend>
            <img src={require("../images/html.jpg").default}/>

 </fieldset>

 <fieldset>
            <legend><h3> CSS3</h3></legend>
            <img src={require("../images/css.jpg").default}/>

 </fieldset>

 <fieldset>
            <legend><h3>React</h3></legend>
            <img src={require("../images/react.jpg").default}/>

 </fieldset>
        </div>     
         </>
        )
    }
}