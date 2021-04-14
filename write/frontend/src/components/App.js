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

function AuthenticatedRoute ({component: Component, loggedIn, ...rest}) {
	return (
		<Route 
			{...rest}
			render = {() => 
				loggedIn ? (
					<Component />
				) : (
					<Redirect 
						to={{
							pathname: '/login'
						}}
					/>
				)
			}
		/>
	)
}
	

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: false,
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

	updateLogIn = loggedIn => {
		// Update the state to log in user
		this.setState({
			loggedIn: loggedIn
		})
	}

	render() {
		return (
			<Router>
					<Route path="/" component={Navbar} />
					<Route exact path='/login' render={(props) => (
						<LogIn {...props} updateLogIn={this.updateLogIn}/>
					)} />
					<Route exact path="/" loggedIn={this.state.loggedIn} component={Home} />
					<AuthenticatedRoute exact path='/create' loggedIn={this.state.loggedIn} component={Create} />
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
 
