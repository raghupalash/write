// Renders a Navbar in header div (useless in this main branch)
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class Navbar extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            display: 'visible',
        }
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        .Write
                    </a>
                    <a className="channel-name" href="#">Coding-in-depth</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">  
                    </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;