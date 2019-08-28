import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, IconButton ,Card , CardTitle , CardActions , Button, CardText, CardMenu } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        };
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">

                    {/* Pizza UTO Project */}
                    <Card shadow={5} className="card">
                        <CardTitle className="card-title" style={{color:'#FEAC5E', background:'url(./images/pizzaUTO.png) center / cover'}}>
                            Pizza UTO
                        </CardTitle>
                        <CardText className="card-text" style={{fontSize:'1.3rem', lineHeight:'1.5'}}>
                         web application for a singular restaurant where a user can order for pick-up. The web app use Twilio API
to communicate with the restaurant (SMS text) about a new order placed.  Frameworks: Express, node, Ajax.
                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/Fionalan727/midterm-project-6" rel="noopener noreferrer" target="_blank">
                                <Button clolored>Github</Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{color:'grey'}}>
                        <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                    {/* Twitter Project */}
                    <Card shadow={5} className="card">
                        <CardTitle className="card-title" style={{color:'#FEAC5E', background:'url(./images/with.png) center / cover'}}>
                            Scepter Tweet
                        </CardTitle>
                        <CardText className="card-text" style={{fontSize:'1.3rem', lineHeight:'1.5'}}>
                            Scepter Tweet is a single page Twitter clone project powered by AJAX. Frameworks: Express, jQuery, MongoDB, Node, SASS
                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/Fionalan727/tweeter" rel="noopener noreferrer" target="_blank">
                                <Button clolored>Github</Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{color:'grey'}}>
                        <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                    {/* Tiny App Project */}
                    <Card shadow={5} className="card">
                        <CardTitle className="card-title" style={{color:'#FEAC5E', background:'url(./images/TinyURL.png) center / cover'}}>
                            Tiny Scepter
                        </CardTitle>
                        <CardText className="card-text" style={{fontSize:'1.3rem', lineHeight:'1.5'}}>
                            Tiny Scepter is a full stack web application built with Node and Express that allow users to shorten urls (like bit.ly).

                            Frameworks: Express, Node
                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/Fionalan727/TinyApp-Project" rel="noopener noreferrer" target="_blank">
                                <Button clolored>Github</Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{color:'grey'}}>
                        <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>
                
            )
        }else if(this.state.activeTab === 1){
            return(
                <div>
                    <h1>This is React</h1>
                </div>
            )
        }else if(this.state.activeTab === 2){
            return(
                <div>
                    <h1>This is Bootstrap</h1>
                </div>
            )
        }else if (this.state.activeTab === 3){
            return(
                <div>
                    <h1>This is RUBY ON RAILS</h1>
                </div>
            )
        }
    }

    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=> this.setState({activeTab: tabId})} ripple>
                    <Tab>Express</Tab>
                    <Tab>React</Tab>
                    <Tab>Bootstrap/API</Tab>
                    <Tab>Ruby on Rails</Tab>
                </Tabs>
                
                <Grid>
                    <Cell col={12}>
                        <div className="content">
                            {this.toggleCategories()}
                         </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
} ;
   
  
export default Projects;