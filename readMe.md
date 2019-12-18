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
https://github.com/kolodny/immutability-helper
https://poiemaweb.com/js-immutability

```javascript
import update from 'immutability-helper';
```

// 속성
$ npm install --save prop-types
https://reactjs-kr.firebaseapp.com/docs/typechecking-with-proptypes.html



mongodb+srv://lunch_menu:<password>@cluster0-0akd1.mongodb.net/test?retryWrites=true&w=majority



# 2019.12.17 

mongodb, nodemon backend 설정

$npm install --save exp

# 2019.12.19

Dom 객체에 접근하기 위해서는 ref 사용.
ref={(ref) => this.nameInput = ref}

this.nameInput.focus();