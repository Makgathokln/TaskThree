import React  from "react";
import "./style.css";


import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEnvelope, faMobileAlt, faMap,faBook,faMusic,faGamepad,faTree, faComputer } from "@fortawesome/free-solid-svg-icons";


const about = () => {
    return (
        <>
        <div className="wrapper">
            <div className="resume">
        
         <div className="left">
        
            <div className="img-holder">
        <img src={require("../images/pic.jpg").default}/>
                </div>
        
            <div className="contact_wrap pb">

            <div className="title">
        Contact
        </div>

        <div className="contact">
            <ul>
                <li>
                    <div className="li_wrap">

                        <div className="icon">
                        <FontAwesomeIcon icon = {faMobileAlt}/>                        </div>
                        
                        <div className="text">+2779 247 6117</div>
                    </div>
                </li>
                <li>
                    <div className="li_wrap">
                        <div class="icon">
                        <FontAwesomeIcon icon = {faEnvelope}/></div>
        
                        
                        <div className="text">Makgathokln@gmail.com</div>
                    </div>
                </li>
                <li>
                    <div className="li_wrap">
                        <div className="icon">
                    <FontAwesomeIcon icon ={faMap}/>
                        </div>
                        <div className="text">141 Zone F Lebowakgomo</div>
                    </div>
                </li>
            </ul>
        </div>
            </div>

                <div className="skills_wrap pb">
                 
                <div className="title">
                Skills
                </div>    

                <div className="skills">
                    <ul>
                        <li>
                            <div className="li_wrap">

                                <div className="icon">
                                <FontAwesomeIcon icon = {faBook}/>         
                                </div>
                                <div className="text">HTML</div>
                            </div>
                        </li>
                        <li>
                            <div className="li_wrap">

                                <div className="icon">
                                <FontAwesomeIcon icon = {faBook}/>         
                
                                </div>
                                <div className="text">CSS</div>
                                </div>
                        </li>
                        <li>
                            <div className="li_wrap">
                                <div className="icon">
                                <FontAwesomeIcon icon = {faBook}/>         
                
                                </div>
                            <div className="text">Javascript</div>
                            </div>
                        </li>
                        <li>
                            <div className="li_wrap">

                                <div className="icon">
                                <FontAwesomeIcon icon = {faBook}/>         
                
                                </div>
                                <div className="text">MVC Core C#</div>
                            </div>
                        </li>
                        <li>
                            <div className="li_wrap">

                                <div className="icon">
                                <FontAwesomeIcon icon = {faBook}/>         
                
                                </div>
                            <div className="text">React</div>
                            </div>
                        </li>

                        
                    </ul>
                </div>
               </div>
               
                <div className="hobbies_wrap pb">
                    
                    <div className="title">
                    Hobbies
                    </div>  
                    
                    <div className="hobbies">
                        <ul>
                            <li>
                                <div className="li_wrap">
                                    <div className="icon">
                                    <FontAwesomeIcon icon = {faBook}/>         
                                                               </div>
                                    <div className="text">Reading</div>
                                </div>
                            </li>
                            <li>
                            <div className="li_wrap">
                                    <div className="icon">
                                    <FontAwesomeIcon icon = {faMusic}/>         
                    
                                    </div>
                                <div className="text">Music</div>
                                </div>
                            </li>
                            <li>
                                <div className="li_wrap">
                                    <div className="icon">
                                    <FontAwesomeIcon icon = {faGamepad}/>         
                    
                                    </div>
                                    <div className="text">Gaming</div>
                                </div>
                            </li>
                            <li>
                                <div className="li_wrap">
                                    <div className="icon">
                                    <FontAwesomeIcon icon = {faTree}/>         
                    
                                    </div>
                                    <div className="text">Gardening</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                </div>
                <div class="right">
                   <div class="header">
                        <div class="name_role">
                            <div class="name">
                                Leah Makgatho
                            </div>

                            <div class="role">
                                Android Application Developer
                            </div>
                            </div>
                            <div class="about">
                            A forward thinking developer offering more on building, integrating, testing and supporting
                            Android applications for mobile and tablet android platform seeks position
                            with a top technology firm. I am open to learning and equipping myself with the necessary skills.
                            
                            </div>
                        </div>
                   <div class="right_inner">
                    <div class="exp">
                        <div class="title">
                            Experience
                        </div>
                        <div class="exp_wrap">
                            <ul>
                                <li>
                                    <div class="li_wrap">
                                        <div class="date">2021-present</div>
                                        <div class="info">
                                            <p class="info_title">Android Applications Developer</p>
                                            <p class="info_com">Mlab</p>
                                            <p class="info_cont">
                                            Attend to required refactoring, debugging and implementing of necessary
                                            changes.<br/>
                                             Document processes for specifications to ensure quality. <br/>
                                             Evaluate system specifications against client requirements. <br/>
                                            Participate in implementing new software features and maintain existing features. <br/>
                                            Assist in developing user guide/manuals as necessary.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="li_wrap">
                                        <div class="date">2019-2020</div>
                                        <div class="info">
                                            <p class="info_title">Junior Consultant</p>
                                            <p class="info_com">Tygerella Pty Ltd</p>
                                            <p class="info_cont">
                                            Develop copy of websites, applications and other interactive media.<br/>
                                            Develops project documentation, style guides and user training materials.<br/>
                                            Analyzes of existing system content, information architecture and visual designs.    
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="li_wrap">
                                        <div class="date">2016-2017</div>
                                        <div class="info">
                                            <p class="info_title">Desktop Support Technician </p>
                                            <p class="info_com">Auditor General of South Africa</p>
                                            <p class="info_cont">
                                                Update and monitor daily assigned.<br/>
                                                Install, configure and support IT structure. <br/>
                                                Setting up laptops, join pc to domain, add intranet, link emails.<br/>
                                                Security encryption and antivirus installations.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="li_wrap">
                                        <div class="date">2015-2016</div>
                                        <div class="info">
                                            <p class="info_title">Learnership in Technical Support </p>
                                            <p class="info_com">UTI Pharma</p>
                                            <p class="info_cont">
                                                Troubleshoot handheld scanners. <br/>
                                                Workstation moves and Connect IP telephones.<br/>
                                                Computer maintenance.<br/>
                                                Project management.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                           
                            </ul>
                            </div>
                        </div>
                        <div class="education">
                            <div class="title">
                                Education
                            </div>
                            <div class="education_wrap">
                                <ul>
                                    <li>
                                        <div class="li_wrap">
                                            <div class="date">2011-2012</div>
                                            <div class="info">
                                                <p class="info_title">Level 5 Higher National Diploma in Information Technology</p>
                                                <p class="info_com">Cti Education Group</p>
                                                <p class="info_cont">
                                                   
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="li_wrap">
                                            <div class="date">2018-2018</div>
                                            <div class="info">
                                                <p class="info_title">Microsoft Certified Solutions Developer Web Applications</p>
                                                <p class="info_com">Torque IT</p>
                                                <p class="info_cont">
                                                   
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                   
                                </ul>
                                </div>
                            </div>
                        
                    </div>
                   </div>
                </div> 
            </div>
               </>
    )
}

export default about