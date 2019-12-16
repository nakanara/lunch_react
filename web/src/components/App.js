import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import Footer from "./layout/footer";
import { Home, About } from "../pages";


const App = (prop) => {  
  return (
    <>
      <h1>{prop.title}</h1>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        
      </div>
      <Footer />
    </>
  );
}

export default App;