import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Header from "./Components/Header"
import HomePage from "./Components/HomePage"
import Gallery from "./Components/Gallery"
import NoPageFound from "./Components/NoPageFound"





const App = () => (
  <BrowserRouter>
    <div>
      <Header />

      <div className="main-content">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/gallery" component={Gallery} />
          <Route component={NoPageFound} />
        </Switch>
      </div>
    </div>
  
  </BrowserRouter>
)

export default App;
