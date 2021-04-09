import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class LogIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            wantTo: 'signup',
            signUpData: {
                wantTo: 'signup'
            },
            loginData: {
                wantTo: 'login'
            },
        };
    }

    render() {
        return (
            <div id="login">
                {this.state.wantTo === 'signup'
                    ?
                    <div className="d-flex align-items-center justify-content-center login-height">
                        <div className="p-2 bd-highlight">
                            <h2>Join Write</h2>
                            <form onSubmit ={this.submit}>
                                <div class="form-group">
                                    <input 
                                        className="form-control" 
                                        type="text" 
                                        name="username" 
                                        placeholder="Username" 
                                        value={this.state.value} 
                                        onChange={this.handleChange} 
                                    />
                                </div>
                                <div class="form-group">
                                    <input 
                                        className="form-control" 
                                        type="text" 
                                        name="contact" 
                                        placeholder="Email" 
                                        value={this.state.value} 
                                        onChange={this.handleChange} 
                                    />
                                </div>
                                <div class="form-group">
                                    <input 
                                        className="form-control" 
                                        name="dob" 
                                        type="date" 
                                        value={this.state.value} 
                                        onChange={this.handleChange} 
                                    />
                                </div>
                                <div class="form-group">
                                    <input 
                                        className="form-control" 
                                        name="password" 
                                        type="password" 
                                        placeholder="Password" 
                                        value={this.state.value} 
                                        onChange={this.handleChange} 
                                    />
                                </div>
                                <div class="form-group">
                                        <input 
                                            className="form-control" 
                                            name="confirmPassword" 
                                            type="password" 
                                            placeholder="Password(Again)" 
                                            value={this.state.value} 
                                            onChange={this.handleChange} 
                                        />
                                </div>
                                <input type="submit" className="btn btn-success" />
                            </form>
                            <p className="text-small">Already Have an account? 
                            <a href="#" onClick={this.loginSignup}> login</a> instead!</p>
                        </div>
                    </div>
                    :
                    <div>
                        <div className="d-flex align-items-center justify-content-center login-height">
                            <div className="p-2 bd-highlight">
                                <h2>Welcome Back!</h2>
                                <form onSubmit={this.submit}>
                                    <div class="form-group">
                                        <input 
                                            className="form-control" 
                                            type="text" 
                                            name="username" 
                                            placeholder="Username" 
                                            value={this.state.value} 
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div class="form-group">
                                        <input 
                                            className="form-control" 
                                            name="password" 
                                            type="password" 
                                            placeholder="Password" 
                                            value={this.state.value} 
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <button className="btn btn-success">Submit</button>
                                    <p className="text-small">Don't have an accoung 
                                    <a href="#" onClick={this.loginSignup}> signup</a> instead!</p>
                                </form>
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }

    loginSignup = () => {
        this.setState(state => {
            return {
                wantTo: (state.wantTo === 'signup')? 'login':'signup',
            } 
        })
    }

    handleChange = e => {
        const {value, name} = e.target
        this.setState(state => {
            if (state.wantTo === 'signup') {
                let data = state.signUpData;
                data[name] = [value];
                return {
                    signUpData: data,
                }
            } else {
                let data = state.loginData;
                data[name] = value;
                return {
                    loginData: data,
                }
            }
        })
    }

    getCookie = name => {
        if(!document.cookie) {
            return null;
        }
        const xsrfCookies = document.cookie.split(';')
        .map(c => c.trim())
        .filter(c => c.startsWith(name + '='));

        if(xsrfCookies.length === 0) {
            print('tokenLength0')
            return null;
        }
        return decodeURIComponent(xsrfCookies[0].split('=')[1]);
    }

    submit = e => {
        e.preventDefault();
        const csrfToken = this.getCookie('CSRF-TOKEN');
        let data = this.state.wantTo === 'signup'? this.state.signUpData:this.state.loginData;
        console.log(data);
        fetch('http://127.0.0.1:8000/api/user', {
            'method': 'POST',
            'headers': {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken,
            },
            'body': JSON.stringify(data),
        })
        .then(response => response.json())
        .then(something => console.log(something));
    }
}



export default LogIn;

ReactDOM.render(
    <React.StrictMode>
      <LogIn />
    </React.StrictMode>,
    document.querySelector('#app')
);
 