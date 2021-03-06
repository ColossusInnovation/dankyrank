import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../bootstrap.css';

class MyGroups extends Component {

  constructor(props) {
    super(props);
    this.state = window.initialState;
  }

  render() {
    return (
      <div className="App">
        <a href={this.state.login_link}>Login with Spotify</a>
      </div>
    );
  }
}

export default MyGroups;

let root = document.getElementById(('react'));
if (root) {
  ReactDOM.render(<MyGroups/>, document.getElementById('react'));
}



