const emailsReducerDefaultState = [];

const emailsReducer = (state = emailsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EMAIL':
            return [...state, action.email];
        case 'DELETE_EMAIL':
            return [...state, action.email];
        case 'UPDATE_EMAIL':
            return state.map((email) => {
                if (email.id === action.id) {
                    return {
                        ...email,
                        ...action.updates
                    };

                }
                else {
                    return email;
                }
            });
        default:
            return state;
    }
}

export default emailsReducer;