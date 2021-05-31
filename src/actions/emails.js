import { v4 as uuidv4 } from 'uuid';

export const addEmail = (email) => ({
    type: 'ADD_EMAIL',
    email: {
        id: uuidv4(),
        deleted: false,
        spam: false,
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

export const deleteEmail = (id) => ({
    type: 'UPDATE_EMAIL',
    id,
    updates: {
        deleted: true
    }
});

export const spamEmail = (id) => ({
    type: 'UPDATE_EMAIL',
    id,
    updates: {
        spam: true
    }
});