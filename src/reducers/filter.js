const filtersReducerDefaultState = {
    filterby:'inbox'
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'FILTER_BY_INBOX':
            return {
                ...state,
                filterby: 'inbox'
            };
        case 'FILTER_BY_DELETED':
            return {
                ...state,
                filterby: 'deleted'
            };
        case 'FILTER_BY_SPAM':
            return {
                ...state,
                filterby: 'spam'
            };
         default:
      return state;
  }
};

export default filtersReducer;