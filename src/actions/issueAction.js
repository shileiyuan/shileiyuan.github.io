import { Receive_Issue } from '../configures/actionTypes';

function receiveIssue(json) {
  return {
    type: Receive_Issue,
    data: json
  }
}

export function getIssueIfNeeded(url) {
  return (dispatch, getState) => {
    if(getState().issueReducer.issues.length === 0){
      return dispatch(getIssue(url));
    }
  }
}


function getIssue(url) {
  return dispatch => fetch(url)
    .then(response => response.json())
    .then(json => dispatch(receiveIssue(json)))
}