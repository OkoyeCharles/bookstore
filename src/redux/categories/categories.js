import * as actions from '../actionTypes';

const categories = (state = [], action) => {
  switch (action.type) {
    case actions.CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
};

export default categories;
