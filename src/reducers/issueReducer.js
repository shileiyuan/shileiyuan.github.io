import { Receive_Issue } from '../configures/actionTypes';

const initialState = {
  issues: []
};

export default function issueReducer(state = initialState, action) {
  switch (action.type) {
    case Receive_Issue: {
      return{
        ...state, 
        issues: action.data
      }
    }
    default: return state;
  }
}
