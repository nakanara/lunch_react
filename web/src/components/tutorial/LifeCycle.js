import React from 'react';
import ReactDOM from 'react-dom';

export default class LifeCycle extends React.Component {
  constructor(props){
    super(props);

    console.log('constructor');
    this.state = {
      show: false,
      number: 0
    };
    this._show = this._show.bind(this);
  }

  _show(){
    this.setState({
      show:!this.state.show,
      number: this.state.number + 1
    });
  }

  // componentWillMount(){
  //   console.log('componentWillMount');
  // }

  // Did Mount
  componentDidMount(){
    console.log('componentDidMount');
  }

  // static getDerivedStateFromProps (props, state){
  //   console.log('getDerivedStateFromProps');
  //   return null;
  // }

  getSnapshotBeforeUpdate(pervProps, pervState){
    console.log('getSnapshotBeforeUpdate');
    return null;
  }
  componentDidUpdate(prevProps, pervState){
    console.log('componentDidUpdate');
  }
  // componentWillUpdate(){
  //   console.log('componentWillUpdate');
  // }
  componentWillUnmount(){
    console.log('componentWillUnmount');
  }


  componentDidMount(){
    console.log('componentDidMount');
  }
  render(){

    return (<div>
      <h1>render</h1>
      <h1>{this.state.number}</h1>
      <button onClick={this._show}>BTN</button>
    </div>)
  }
}