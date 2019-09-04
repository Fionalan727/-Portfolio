import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

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
                                style={{height:'200px',borderRadius:"50%"}}
                            />
                        </div>
                        <h2 style={{paddingTop:'2em'}}>Yufei Lan</h2>
                        <h4 style={{color:'grey'}}>Full Stack Web Developer</h4>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                    </Cell>
                    <Cell col={8} className="resume-right-col">Right Side</Cell>
                </Grid>
            </div>
        )
    }
} ;
   
  
export default Resume;