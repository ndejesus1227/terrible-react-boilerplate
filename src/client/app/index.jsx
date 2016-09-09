import React from 'react';
import {render} from 'react-dom';
import Header from './components/Header/Header.jsx';

class App extends React.Component {
  render () {
    return (
    	<div className="main-container">
    		<Header></Header>
    	</div>
    	)
  }
}

render(<App/>, document.getElementById('app'));