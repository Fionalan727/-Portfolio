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
                <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                    <CardTitle style={{color:'grey', height:'176px', background:'url(./images/with.png) center / cover'}}>
                        Scepter--Twitter Clone
                    </CardTitle>
                    <CardText>
                    Twitter clone powered by AJAX

                    Frameworks: Express, jQuery, MongoDB, Node, SASS
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
                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        )
    }
} ;
   
  
export default Projects;