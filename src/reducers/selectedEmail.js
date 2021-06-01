const selectedEmailsReducerDefaultState = '';

const selectedEmailsReducer = (state = selectedEmailsReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_SELECTED_EMAIL':
            return action.id;
        case 'CLEAR_SELECTED_EMAIL':
            return '';
        default:
            return state;
    }
}

export default selectedEmailsReducer;