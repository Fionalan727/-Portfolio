import React, { Component } from 'react';
import {Grid, Cell,List,ListItem,ListItemContent} from 'react-mdl';

class Contact extends Component {
    render(){
        return(
            <div className="contact-body">
               <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Yufei Lan</h2>
                        <img src="./images/profile.jpg"
                            alt="avatar"
                            style={{height:'307px',borderRadius:'8%', marginTop:'13px'}}
                        />
                        <p style={{width:'75%',margin:'auto',paddingTop:'1em'}}>Full stack developer who is passionate about problem solving and logical puzzles . Enjoys building awesome websites that combine functionality with efficiency to create an intuitive and beautiful user experience. Strong team player driven by results with efficiency. </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/> 
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'30px',fontFamily:'Anton',paddingBottom:'20px'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        (647)-937-4588
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        lanyufei518@gmail.com
                                    </ListItemContent>
                                </ListItem>

                            </List>
                        </div>
                        
                    </Cell>

               </Grid>
            </div>
        )
    }
} ;
   
  
export default Contact;