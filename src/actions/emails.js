import { v4 as uuidv4 } from 'uuid';

export const addEmail = (email) => ({
    type: 'ADD_EMAIL',
    email: {
        id: uuidv4(),
        ...email
    }
});