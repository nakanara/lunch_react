import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import Footer from "./layout/footer";
import { Home, About } from "../pages";
import Contact from './tutorial/Contact';


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    }

  }

  render() {
    return (
      <Contact />
    )
  }
  // render() {
  //   return (
  //     <>
  //       <h1>{this.props.title}</h1>
  //       <button onClick={()=> this.setState({name:"Click"})}>Click Me!1</button>
  //       <label>{this.state.name} dho?? </label>
  //       <div>
  //         <Route exact path="/" component={Home} />
  //         <Route path="/about" component={About} />
          
  //       </div>
  //       <Footer />
  //     </>
  //   );
  // }
}

export default App;