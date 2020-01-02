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
    // 외부 API 연동, 컴포넌트에 필요한 데이터 로드
    console.log('componentDidMount');
  }

  // 특정 props 가 변경될 때 설정하고 싶은 state 값을 리턴하는 형태
  // static getDerivedStateFromProps (props, state){
  //   console.log('getDerivedStateFromProps');
  //   return null;
  // }

  shouldComponentUpdate(nextProps, nextState) {
    // 업데이트 여부 true일 경우 render
    console.log('shouldComponentUpdate');
    return true;
  }

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