import React from 'react';
import ReactDOM from 'react-dom';


/**
 * https://jistol.github.io/frontend/2018/12/10/react-lifecycle-methods/
 * 
 * V16.3과 16.4의 차이는 props 변경시 이벤트 16.3에서는 신규 props에서만 getDerivedStateFromProps가 호출되었지만 16.4+에서는 props변화시 호출
 * 
 * 화면 변경시
 * render()
 * getSnapshotBeforeUpdate // 업데이트 이후
 * 실제 DOM 변화
 * componentDidUpdate
 */
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

  componentWillUpdate(nextProps, nextState) {
    // shouldComponentUpdate 에서 true일 경우에만 호출
    // 애니메이션 초기화나 이벤트 리스너 초기화
    // v163. 이후 deprecate 
    // getSnapshotBeforeUpdate 사용
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