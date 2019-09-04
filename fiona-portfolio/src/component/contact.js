import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class Contact extends Component {
    render(){
        return(
            <div className="contact-body">
               <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Yufei Lan</h2>
                        <img src="./images/profile.jpg"
                            alt="avatar"
                            style={{height:'307px',borderRadius:'8%'}}
                        />
                        <p style={{width:'75%',margin:'auto',paddingTop:'1em'}}>Full stack developer who is passionate about problem solving and logical puzzles . Enjoys building awesome websites that combine functionality with efficiency to create an intuitive and beautiful user experience. Strong team player driven by results with efficiency. </p>
                    </Cell>
                    <Cell col={6}>Half Page</Cell>

               </Grid>
            </div>
        )
    }
} ;
   
  
export default Contact;