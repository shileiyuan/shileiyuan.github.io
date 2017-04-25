import React from 'react';
import { connect } from 'react-redux';
import marked from 'marked';
import hljs from 'highlight.js';

class Blog extends React.Component {
  componentDidMount() {
    marked.setOptions({
      highlight: code => {
        return hljs.highlightAuto(code).value;
      }
    });
  }
  render() {
    const issues = this.props.issues;
    const id = parseInt(this.props.params.id);
    const index = issues.findIndex(issue => issue.id === id);
    
    let issue = issues[index];

    const html = typeof issue === 'undefined' ? marked('_什么都没有_') : marked(issue.body)
    return (
      <div dangerouslySetInnerHTML={{ __html: html }}>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    issues: state.issueReducer.issues
  }
}

export default connect(mapStateToProps)(Blog);