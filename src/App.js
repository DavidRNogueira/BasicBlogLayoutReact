import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Contato from "./Components/Contato.js"
import Posts from "./Components/Posts.js"
import NavBar from "./Components/NavBar.js"
import Home from "./Components/Home"
import Post from "./Components/Post.js"

class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <div>
      <NavBar/>
      <Switch>
      <Route exact path ="/" component={Home}/>
        <Route path ="/contato" component={Contato}/>
        <Route path ="/produtos" component={Posts}/>
        <Route path = "/:post_id" component={Post}/>
      </Switch>
      </div>
      </BrowserRouter>
      
    )
  }
}

export default App;
