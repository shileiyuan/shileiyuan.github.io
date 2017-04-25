import React from 'react';
import { Link } from 'react-router';

export default class Present extends React.Component {
  render() {
    return (
      <div>
        <h1>Present</h1>
        <ul>
          <li><Link to="hello">hello</Link></li>
          <li><Link to="blog-list">博客列表</Link></li>
        </ul>
      </div>
    )
  }
}