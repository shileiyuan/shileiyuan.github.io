import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <div>
        <Link to="hello">hello</Link>
      </div>
    );
  }
}
export default App;