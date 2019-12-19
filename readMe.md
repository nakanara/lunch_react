### 프로젝트 설정

1. $ npm init -y 통해 기본 package.json 파일 생성
2. webpack 을 위한 라이브러리 설치

> $ npm install --save-dev webpack webpack-dev-server webpack-cli  
> --save-dev package.json 에 저장하며,   
> -dev 개발에서만 사용

3. 개발용 서버를 사용하기 위해 package.json 수정

``` json
"scripts": {
  "start":"webpack-dev-server --config ./webpack.config.js --mode development"
}
```

4. webpack 설정 파일 webpack.config.js 파일 생성

```javascript

module.exports = {
  entry: [
    './web/src/index.js'
  ],
  output: {
    path: __dirname + '/web',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './web'
  }
};
```

(설정 후 실행 결과) 
$ npm start
```
[./node_modules/webpack-dev-server/client/index.js?http://localhost:8080] (webpack)-dev-server/client?http://localhost:8080 4.29 KiB {main} [built]
...
[./web/src/index.js] 57 bytes {main} [built]
    + 19 hidden modules
i ｢wdm｣: Compiled successfully.
```

5. 바벨 설치

> react는 대부분 es6문법으로 진행되나 브라우저에 따라서 실행되지 않을 수 있음, 바벨로 기존 자바스크립트 문법으로 변환

$ npm install --save-dev @babel/core  
$ npm install --save-dev @babel/cli  
$ npm install --save-dev babel-loader   
> webpack 용 바벨 로더
$ npm install --save-dev @babel/preset-env
  
$ npm install --save-dev @babel/preset-react
> 리액트 언어를 변환해주는 perset 

추가 후 package.json 에 바벨 설정 추가
```javascript
-- package.json
 "babel": {
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react"
    ]
  },
  "devDependencies": {
    ...
  }
```

```javascript
/* webpack.config.js 수정 */

module.exports = {
  "entry": [
    ...
  ],
  "module": {
    "rules": [
      {
        "test": /\.(js|jsx)$/,
        "exclude": /node_modules/,
        "use": ["babel-loader"]
      }
    ]
  },
  "resolve": {
    "extensions": ["*", ".js", ".jsx"]
  },
  "output": {
    ...
  }
}
```


6. react, react-dom 설치

$ npm install --save react react-dom



7. css, sass 로더를 설치

$ npm install --save-dev style-loader css-loader
$ npm install --save-dev sass-loader node-sass

```javascript
// webpack.config.js 변경
module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },

```

8. SPA 를 위한 react-rounter-dom 설치

$ npm install --save react-rounter-dom

9.  여러 환경의 설정을 동일하게 하기 위해 cross-evn 설치

$ npm install --save-d cross-evn

#####

Tutorial

$ npm install --save immutability-helper 
// 데이터 변경 유틸    
[immutability-helper github](https://github.com/kolodny/immutability-helper)   
[immutability 설명](https://poiemaweb.com/js-immutability)

```javascript
import update from 'immutability-helper';
```

// 속성
$ npm install --save prop-types    
[typechecking-with-proptypes](https://reactjs-kr.firebaseapp.com/docs/typechecking-with-proptypes.html)


# 2019.12.17 

mongodb, nodemon backend 설정

$npm install --save exp

# 2019.12.19

Dom 객체에 접근하기 위해서는 ref 사용.
ref={(ref) => this.nameInput = ref}

this.nameInput.focus();

# 2019.12.19
 
[React Life cycle](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)   
[React Component](https://ko.reactjs.org/docs/react-component.html)


## 생성시 

1. constructor
> 생성자
> 해당 컴포넌트가 마운트되기 전에 호출되며, React.Component 를 상속한 컴포넌트가 생성자를 구현 할 때 반드시 super(props) 호출 해야하며, 그렇지 않으면 this.props가 정의되지 않아 문제 발생 소지 있음.
> 여기에서는 this.state 객체 할당. 초기화, 인스턴스에 이벤트 처리 메서드 바인딩
> constructor 내부에서 setState 하면 안됨.

2. getDerivedStateFromProps()
> 최초 마운트 시와 갱신 시 모두에서 render매서드 호출되기 전에 호출
3. render 
> 화면 갱신 메서드이며, 클래스 컴포넌트 구현시 반드시 구현되어야 하는 유일한 메서드
4. componentDidMount()
> 컴포넌트가 마운트된 직후, DOM 적용 후 호출, DOM노드에 있어야 하는 초기화 작업이 해당 메서드에서 진행. (외부 데이터 로드)
> 데이터 구독 설정을 하기 좋은 위치, componentWillUnmount에서는 구독 해제
> 

## 변경시

1. getDerivedStateFromProps
> render 메서드 호출 전에 호출 됨

2. shouldComponentUpdate

> Props를 받은 것으로 컴포넌트 업데이트 여부 결정
> 매개 변수로 (nextProps, nextState) 가 전달되므로 nextProps.id === this.props.id 로 비교 가능 
> JSON.stringify 로 편리하게 비교 가능
> JSON.stringify(this.props) "=" + JSON.stringify(nextProps)
> false 값을 줄 경우 render 하지 않음.

3. render

4. getSnapshotBeforeUpdate(prevProps, prevState)

> 결과과 DOM에 반영된 이후 실행. 해당시점에서 DOM의 스크롤 위치등 적용 이후 정보 확인 가능

5. componentDidUpdate (prevPoprs, prevState, snapshot)

> 갱신이 일어난 직후 호출, 최초 랜더링 시에는 호출되지 않음.
> setState를 사용할 경우 무한 루프 문제 발생.
> shouldComponentUpdate에서 false를 반환할 경우 호출되지 않음.

# 컴포넌트 해제
1. componentWillUnmount

> 컴포넌트가 마운트 해제되어 제거되기 직전, 이 메서드 내에서 타이머 제거, 네트워크 요청 취소, 구독 해제 등의 작업 정리 필요(componentDidmount에서 진행한 작업 해제 진행)

--componentWillMount // 랜더링 전-- 사용 안함
  
1. componentDidMount // 랜더링 후
2. componentWillReceiveProps 
> 새로운 props 받았을 때 실행되며   
> setState를 이용하여 state를 update 해도 됨   
> s

4. shouldComponentUpdate 
> Props를 받은 것으로 컴포넌트 업데이트 여부 결정
> 매개 변수로 (nextProps, nextState) 가 전달되므로 nextProps.id === this.props.id 로 비교 가능 
> JSON.stringify 로 편리하게 비교 가능
> JSON.stringify(this.props) "=" + JSON.stringify(nextProps)

5. componentWillUpdate // 컴포넌트 업데이트 전
> 절대 setState 사용 금지 - 무한 루프
6. componentDidUpdate // 컴포넌트 업데이트 후
> 절대 setState 사용 금지 - 무한 루프
7. componentWillUnmount // 컴포넌트 제거 전
> 컴포넌트가 dom에서 사라진 이후


constructor // 컴포넌트가 가장 처음 만들어 질때 실행, 기본 state 설정 가능

# etc

mlab mongodb 테스트 관련
> mongodb+srv://lunch_menu:<password>@cluster0-0akd1.mongodb.net/test?retryWrites=true&w=majority


# ref
[ReactJS](https://ko.reactjs.org/docs)  
[babel](https://babeljs.io/docs/en/)  
[Webpack](https://webpack.js.org/concepts/)
   
[typechecking-with-proptypes](https://reactjs-kr.firebaseapp.com/docs/typechecking-with-proptypes.html)

** react 강의**  
[velopert](https://velopert.com)   
[velopert Youtube React 강의](https://www.youtube.com/playlist?list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC)   
[velopert slides](http://slides.com/minjunkim-1/deck#/)   


[outsider 바벨 설명](https://blog.outsider.ne.kr/1176)
[immutability 설명](https://poiemaweb.com/js-immutability)   