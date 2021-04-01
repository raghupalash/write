import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Create from './SectionForm/Create';


class App extends Component {
	render() {
		return <Create />
	}
}

export default App;

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('app')
  );
 