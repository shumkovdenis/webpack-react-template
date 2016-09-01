import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';

const app = document.createElement('div');
document.body.appendChild(app);

ReactDOM.render((
  <Main>webpack-react-template</Main>
), app);
