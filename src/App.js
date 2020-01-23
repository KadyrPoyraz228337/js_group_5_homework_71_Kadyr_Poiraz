import React from 'react';
import './App.css';
import Navigation from "./components/navigation/navigation";
import {Route, Switch} from "react-router";
import Dishes from "./components/dishes/dishes";
import AddNewDish from "./components/addNewDish/addNewDish";
import Edit from "./components/edit/edit";
import Orders from "./components/Orders/Orders";

const App = (props) => {
  return (
    <div>
      <Navigation/>
      <Switch>
        <Route path='/' exact component={Dishes} />
        <Route path='/addNewDish' exact component={AddNewDish} />
        <Route path='/orders' exact component={Orders} />
        <Route path='/edit/:id' component={Edit} />
      </Switch>
    </div>
  );
}

export default App;
