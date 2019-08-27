import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './landingPage';

const Main = () => (
 <Switch>
     <Route exact path="/" component={Landing}/>
 </Switch>
)

export default Main;