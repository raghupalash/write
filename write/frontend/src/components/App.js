import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import SectionForm from './SectionForm';
import Navbar from './Navbar';


class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text: '',
			sections: [],
		}
	}

	render() {
		return (
			<div>
				<div className="container">
					<h1>Blog</h1>
					<div>
						{this.state.sections.map(item => {
							return(
							<div key={this.state.sections.indexOf(item)}>
								<p className={item.headingChosen}>{item.heading}</p>
								<p>{item.paragraph}</p>
							</div>)
						})}
					</div>
					<SectionForm dataToApp={this.dataSectionForm}/>
				</div>
			</div>
		);
	}

	dataSectionForm = data => {
		let sections = this.state.sections
		sections.push(data);

		this.setState({
			sections: sections,
		})
		console.log(this.state.sections);
	}
}

export default App;

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('app')
  );
 