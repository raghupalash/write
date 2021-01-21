import React, {Component} from 'react';


class SectionForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			writting: false,
			draftHeading: '',
			headingSizes: [2, 3, 4, 5, 6],
			headingChosen: `h${2}`,
			draftText: '',
		}
		
	}

	render() {
		return (
			<div>
				{this.state.writting
					?
					<div>
						<div>
							<p className={this.state.headingChosen}>{this.state.draftHeading}</p>
							<p>{this.state.draftText}</p>
						</div>
						<form id="section-form" className="jumbotron">
							<div className="form-group">
								<label htmlFor="section-heading">Heading</label>
								<input id="section-heading" onChange={this.updateResponse} className="form-control" placeholder="Heading"></input>
							</div>
							{this.props.wantText && 
								<div>
									<div className="form-group">
										<label htmlFor="heading-size">Heading size</label>
										<select id="heading-size" className="form-control" onChange={this.updateResponse}>
											{this.state.headingSizes.map(item => (
												<option key={item}>{item - 1}</option>
											))}
										</select>
									</div>
									<div className="form-group">
										<label htmlFor="section-text">Text</label>
										<textarea id="section-text" onChange={this.updateResponse} className="form-control" placeholder="Text"></textarea>
									</div>
								</div>
							}
							<button onClick={this.newSection} id="section-save" className="btn btn-primary">Save</button>
							<button onClick={this.cancelSection} id="section-cancel" className="btn btn-default">Cancel</button>
						</form>
					</div>
					
					: 
					<div>
						{this.props.wantText 
							?
							<button id="add-section" onClick={this.newSection} className="btn btn-green">+Section</button>

							:
							<button id="add-heading" onClick={this.newSection} className="btn btn-green">+Heading</button>
						}
					</div>
				}
			</div>
		)
	}

	newSection = event => {
		if (event.target.id === 'section-save') {
			// Sending data to App Component
			let data = {
				heading: this.state.draftHeading,
				paragraph: this.state.draftText,
				headingChosen: this.state.headingChosen,
			}
            this.props.dataToApp(data);
            
			this.setState({
				writting: false,
				headingChosen: `h${2}`,
			})

			// Changing state of this component
			this.setState({
				draftHeading: '',
				draftText: '',
			})
		}
		else {
			this.setState({
				writting: true,
			})
		}
	}

	// Event listener for cancel button
	cancelSection = () => {
		// Hide the form and remove the content that was displayed on the form
		this.setState({
			draftHeading: '',
			draftText: '',
			headingChosen: `h${2}`,
			writting: false,
		})
	}

	updateResponse = event => {
		if (event.target.id === "section-heading") {
			// For size of the main heading
			let headingSize = this.state.headingChosen;
			if(!this.props.wantText) {
				headingSize = 'h1';
			}
			this.setState({
				draftHeading: event.target.value,
				headingChosen: headingSize, // Don't seem very great design
			})
		} else if (event.target.id === "heading-size") {
			this.setState({
				headingChosen: `h${parseInt(event.target.value) + 1}`,
			})
		} else {
			this.setState({
				draftText: event.target.value,
			})
		}
	}
}

export default SectionForm;