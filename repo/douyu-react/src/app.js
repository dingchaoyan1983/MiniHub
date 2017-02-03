import React from 'react';
import {connect} from 'react-redux';
import Header from 'src/components/header';
import Sidebar from 'src/components/sidebar';

function App(props) {
  const {header, sidebar} = props;

  return <div>
            <Header {...header}/>
            <Sidebar {...sidebar}/>
            <div className="mainbody ">
              {props.children}
            </div>
          </div>
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
