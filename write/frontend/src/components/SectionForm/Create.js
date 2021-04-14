import React, {Component} from 'react';

import SectionForm from './SectionForm';


class Create extends Component {
	constructor(props) {
		super(props);

		this.state = {
			blogID: null,
			sections: [], 
			heading: '',
		}
	}

	render() {
		return (
			<div>
				<div className="container">
					<h1>{this.state.heading}</h1>
					<div>
						{this.state.sections.map(item => {
							return(
							<div key={this.state.sections.indexOf(item)}>
								<p className={item.heading_size}>{item.heading}</p>
								<p>{item.paragraph}</p>
							</div>)
						})}
					</div>
					{this.state.heading !== '' 
						?
						<SectionForm dataToApp={this.dataSectionForm} wantText={true}/>
						:
						<SectionForm dataToApp={this.dataSectionForm} wantText={false}/>
					}
				</div>
			</div>
		);
	}

	dataSectionForm = data => {
		// Let's see if it's only heading or if it's a section
		if (data.paragraph === '') {
			this.setState({
				heading: data.heading,
			})
		} else {
			let sections = this.state.sections
			sections.push(data);

			this.setState({
				sections: sections,
			})
			console.log(this.state.sections);
		}
	}
}

export default Create;
