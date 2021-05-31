import { v4 as uuidv4 } from 'uuid';

export const addEmail = (email) => ({
    type: 'ADD_EMAIL',
    email: {
        id: uuidv4(),
        ...email
    }
});

export const markAsRead = (id) => ({
    type: 'UPDATE_EMAIL',
    id,
    updates: {
        isRead: true
    }
});

export const markAsUnread = (id) => ({
    type: 'UPDATE_EMAIL',
    id,
    updates: {
        isRead: false
    }
});