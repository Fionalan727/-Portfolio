import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
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
                        <h2 style={{paddingTop:'1em'}}>Yufei Lan</h2>
                        <h4 style={{color:'grey'}}>Full Stack Web Developer</h4>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                        <p>Full stack developer who is passionate about problem solving and logical puzzles . Enjoys building awesome websites that combine functionality with efficiency to create an intuitive and beautiful user experience. Strong team player driven by results with efficiency.</p>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                        <h5>Phone</h5>
                        <p>(647)-937-4588</p>
                        <h5>Email</h5>
                        <p>lanyufei518@gmail.com/ lanyufei727@gmail.com</p>
                        <h5>Website</h5>
                        <p>mywebsite.com</p>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                    </Cell>
                    <Cell col={8} className="resume-right-col">
                     <h2>Education</h2>

                     <Education
                        startYear={2012}
                     />

                    </Cell>
                </Grid>
            </div>
        )
    }
} ;
   
  
export default Resume;