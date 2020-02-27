import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Produits from './pages/Produits';
import Recettes from './pages/recettes';
import Contact from './pages/Contact';
// FREE
import bienfaits from './pages/bienfaits';
import HomePage from './pages/HomePage';



class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/recettes' component={Recettes} />
        <Route exact path='/Produits' component={Produits} />
        <Route exact path='/bienfaits' component={bienfaits} />
        <Route exact path='/contact' component={Contact} />
        {/* FREE */}
     
       
        >
            
        <Route
          render={function() {
            return <h1>Not Found</h1>;
          }} 
        />
      </Switch>
    );
  }
}

export default Routes;
