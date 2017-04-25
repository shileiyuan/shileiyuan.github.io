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
        <div>
          <Link to="/">返回首页</Link>
        </div>
        {this.props.children}
      </div>
    );
  }
}
export default App;