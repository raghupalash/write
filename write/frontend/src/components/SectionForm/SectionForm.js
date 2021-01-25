import React, {Component} from 'react';

import NewSection from './NewSection';
import UpdateResponse from './UpdateResponse';
import CancelSection from './CancelSection';
import CancelWarning from './CancelWarning'


class SectionForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			writting: false,
			draftHeading: '',
			headingSizes: [2, 3, 4, 5, 6],
			headingChosen: `h${2}`,
			draftText: '',
			cancelWarning: false,
		}
		
	}

	render() {
		return (
			<div>
				<CancelWarning show={this.state.cancelWarning} parent={this}/>
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

	// Event listener for new section
	newSection = e => NewSection(e, this);

	// Event listener for cancel button
	cancelSection = () => CancelSection(e, this)

	// Event listener for updating response
	updateResponse = e => UpdateResponse(e, this);
}

export default SectionForm;