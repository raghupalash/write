import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import SectionForm from './SectionForm';


class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			sections: [], 
			heading: '',
		}
	}

	render() {
		// If heading not present then renders '+heading' btn otherwise renders '+section'
		let isheading = false;
		if(this.state.heading !== '') {
			isheading = true;
		}
		return (
			<div>
				{isheading
					?
						<div className="container">
							<h1>{this.state.heading}</h1>
							<div>
								{this.state.sections.map(item => {
									return(
									<div key={this.state.sections.indexOf(item)}>
										<p className={item.headingChosen}>{item.heading}</p>
										<p>{item.paragraph}</p>
									</div>)
								})}
							</div>
							<SectionForm dataToApp={this.dataSectionForm} forHeading={false}/>
						</div>
					:   
						<div className="container"><SectionForm dataToApp={this.dataSectionForm} forHeading={true}/></div>
				}
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
 