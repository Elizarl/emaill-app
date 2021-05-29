const emailsReducerDefaultState = [];

const emailsReducer = (state = emailsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EMAIL':
            return [...state, action.email];
        case 'DELETE_EMAIL':
            return [...state, action.email];
        default:
            return state;
    }
}

export default emailsReducer;