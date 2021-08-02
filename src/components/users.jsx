import { Component } from "react";
import ReactDOM from "react-dom";
import Users from "./users";
import {faHome} from "@fortawesome/free-solid-svg-icons";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class User extends Component {

    state = { Name: "", Surname: "", Location:"", Age:"",
        list: [
            
            ["Tyson", "Moyahabo",  "janefurse","18" ],
            ["Maria", "Fenyane", "plk", "18"],
            
            ["Kunkie" ,"Makgatho", "plk", "29"],
            ["Kabo", "Rapholo", "janefurse", "29" ]
           
        ]
    }

    render() {
        return ( 
            <div>
               
                <h1 className="list"> List of users </h1>
<br/>
                <ul className="ul"> {
                this.state.list.map(array => <li className="li"> {
                    array[0] + "," + array[1] + 
                    ","  + array[2] + "," +  array[3]}
                    </li>) } 
                </ul> </div>
            
            );
    }

   
}


