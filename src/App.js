import React, { Component} from 'react';

import 'antd/dist/antd.css';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import CustomLayout from './containers/layout';

import BaseRouter from './route';




class App extends Component {

  
render() {

  return (
    <div className="App">

      <Router>
        <CustomLayout>
          <BaseRouter />
        </CustomLayout>
      </Router>
    </div>
  );
}
}

export default App;
