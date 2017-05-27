//React libraries
import { BrowserRouter as Router, Route} from 'react-router-dom'
import ReactDOM from 'react-dom';
import React from 'react';

//Import Container component
import Home from './Home.jsx';

class AppRoute extends React.Component {

  render() {
    return(
      <Router>
        <div>
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<AppRoute />, document.getElementById('contents'));
