import React from 'react';
import { connect } from 'react-redux';
import { getIssueIfNeeded } from '../actions/issueAction';
import { issueUrl } from '../configures/constant';
import { Link } from 'react-router';

class BlogList extends React.Component {
  componentDidMount() {
    this.props.dispatch(getIssueIfNeeded(issueUrl));
  }
  render() {
    const issues = this.props.issues;
    return (
      <div>
        <h1>博客列表</h1>
        <ul>
          {
            issues.map(issue => (
              <li key={issue.id}><Link to={`/blog/${issue.id}`}>{issue.title}</Link></li>
            ))
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    issues: state.issueReducer.issues
  }
}

export default connect(mapStateToProps)(BlogList);