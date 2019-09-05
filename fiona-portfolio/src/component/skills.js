import React, {Component} from 'react';
import {Cell} from 'react-mdl';

class Skills extends Component{
    render(){
        return(
            <Cell col={4}>
                <div style={{display:'flex'}}>{this.props.skill}</div>
            </Cell>
        )
    }
}
export default Skills;