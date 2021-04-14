import React, {Component} from 'react'

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button className="btn btn-success" onClick={this.createBlog}>Create</button>
        )
    }

    createBlog = () => {
        this.props.history.push('/create')
    }
}

export default Home;