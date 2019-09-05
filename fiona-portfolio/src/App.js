import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import './App.css';
import Main from './component/main';
import{ Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
            <Header className="header-color" title={<Link style={{textDecoration:'none',color:'white',fontSize:'50px',fontFamily:'Megrim, serif',fontWeight:'bold'}}to="/">Fiona Lan</Link>} scroll>
                <Navigation>
                    <Link style={{textDecoration:'none',color:'White',fontFamily:'Megrim, serif',fontSize:'25px',fontWeight:'bold'}}to="/resume">Resume</Link>
                    <Link style={{textDecoration:'none',color:'White',fontFamily:'Megrim, serif',fontSize:'25px',fontWeight:'bold'}}to="/projects">Projects</Link>
                    <Link style={{textDecoration:'none',color:'White',fontFamily:'Megrim, serif',fontSize:'25px',fontWeight:'bold'}}to="/contact">Contact</Link>
                </Navigation>
            </Header>
            <Drawer title={<Link style={{textDecoration:'none',color:'black',fontSize:'30px',fontFamily:'Megrim, serif',fontWeight:'bold'}}to="/">Fiona Lan</Link>} >
                <Navigation>
                    <Link style={{textDecoration:'none',color:'black',fontSize:'25px',fontWeight:'bold',fontFamily:'Megrim, serif'}}to="/resume">Resume</Link>
                    <Link style={{textDecoration:'none',color:'black',fontSize:'25px',fontWeight:'bold',fontFamily:'Megrim, serif'}}to="/projects">Projects</Link>
                    <Link style={{textDecoration:'none',color:'black',fontSize:'25px',fontWeight:'bold',fontFamily:'Megrim, serif'}}to="/contact">Contact</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main/>
            </Content>
        </Layout>
    </div>
    );
  }
}

export default App;
