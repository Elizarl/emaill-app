const searchReducerDefaultState =
{
    text: ''
}

const searchReducer = (state = searchReducerDefaultState, action) => {
         switch (action.type) {
        case 'SEARCH_EMAIL':
                 return {
                     ...state,
                     text: action.payload
            }
                ;
     default:
      return state;
  }
};

export default searchReducer; 