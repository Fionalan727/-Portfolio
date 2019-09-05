import React, {Component} from 'react';
import {Cell} from 'react-mdl';

class Skills extends Component{
    render(){
        return(
            <Cell col={3}>
                <div style={{display:'flex', fontSize:'22px',lineHeight:'1.8'}}>{this.props.skill}</div>
            </Cell>
        )
    }
}
export default Skills;