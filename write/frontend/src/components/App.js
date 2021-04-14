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
import Home from './Home';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isAuth: false,
		}
	}

	async componentDidMount() {
		fetch('http://127.0.0.1:8000/api/user_authenticated')
		.then(response => response.json())
		.then(data => {
			this.setState({
				isAuth: data.isAuth,
			});
		})
	}

	render() {
		return (
			<Router>
				<Switch>
					<Route exact path='/login' component={LogIn} />
				</Switch>
				<Switch>
					<Route exact path="/home" component={Home} />
				</Switch>
				<Switch>
					<Route exact path='/create' render={() =>
						<div>
							<Navbar />
							<Create />
						</div>
					} />
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
 