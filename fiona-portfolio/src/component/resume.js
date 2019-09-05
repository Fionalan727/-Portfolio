import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Skills from './skills'
class Resume extends Component {
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign:'center'}}>
                            <img 
                                src="./images/profile.jpg"
                                alt="avatar"
                                style={{height:'240px',borderRadius:"50%"}}
                            />
                        </div>
                        <h2 style={{paddingTop:'1em'}}>Fiona Lan</h2>
                        <h4 style={{color:'grey'}}>Full Stack Web Developer</h4>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                        <p>Full stack developer who is passionate about problem solving and logical puzzles . Enjoys building awesome websites that combine functionality with efficiency to create an intuitive and beautiful user experience. Strong team player driven by results with efficiency.</p>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                        <h5>Phone</h5>
                        <p>(647)-937-4588</p>
                        <h5>Email</h5>
                        <p>lanyufei518@gmail.com/ lanyufei727@gmail.com</p>
                        <h5>Resume</h5>
                        <a href="https://resume.creddle.io/resume/bu6s47g78xy" rel="noopener noreferrer" target="_blank">My Resume</a>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                    </Cell>
                    <Cell col={8} className="resume-right-col">
                     <h2>Education</h2>

                     <Education
                        startYear={2019}
                        endYear={2019}
                        schoolName='Lighthouse Labs Web Development Bootcamp'
                        description="Lighthouse Labs is a coding bootcamp for web and mobile software development in multiple cities across Canada."
                     />

                    <Education
                        startYear={2014}
                        endYear={2018}
                        schoolName='Downsivew Secondary School'
                        description="Downsview Secondary School is a semestered public secondary school in the area of Toronto, Ontario, Canada."
                     />

                    <hr style={{borderTop:"3px solid #e22947"}}/>
                    <h2>Skills</h2>
                    <Grid>
                        <Skills skill="javaScript"/>
                        <Skills skill="HTML5"/>
                        <Skills skill="CSS3"/>
                        <Skills skill="Ruby"/>
                        <Skills skill="Python"/>
                        <Skills skill="NodeJS"/>
                        <Skills skill="Ajax"/>
                        <Skills skill="Rails"/>
                        <Skills skill="Express"/>
                        <Skills skill="jQuery"/>
                        <Skills skill="EJS"/>
                        <Skills skill="Bootstrap 3&4"/>
                        <Skills skill="WebSocket"/>
                        <Skills skill="Git"/>
                        <Skills skill="SQL"/>
                        <Skills skill="PostgreSQL"/>
                        <Skills skill="MongoDB"/>




                    </Grid>

                    </Cell>
                </Grid>
            </div>
        )
    }
} ;
   
  
export default Resume;