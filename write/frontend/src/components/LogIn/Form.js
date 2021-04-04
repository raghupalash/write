import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class LogIn extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div class="container-fluid" id="login">
                <div className="row">
                    <div className="col-md">
                        
                    </div>
                    <div className="col-md"></div>
                </div>
            </div>
        );
    }
}

export default LogIn;

ReactDOM.render(
    <React.StrictMode>
      <LogIn />
    </React.StrictMode>,
    document.querySelector('#app')
);
 