// Renders a Navbar in header div
import React, {Component} from 'react';


class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img src="{ static 'images/logo.png' }" width="50" height="50" alt="" />
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