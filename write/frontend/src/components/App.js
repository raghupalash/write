import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router, 
	Switch, 
	Route,
	Link, 
	Redirect
} from 'react-router-dom';

import Create from './SectionForm/Create';
import LogIn from './LogIn/Form';
import Navbar from './Navbar';

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path='/login' component={LogIn} />
				</Switch>
				<Switch>
					<Route exact path='/create'>
						<Navbar />
						<Create />
					</Route>
				</Switch>
			</Router>
		)
	}
}

export default App;

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('app')
  );
 