import { v1 as uuidv1 } from 'uuid';
import moment from 'moment';

export const addPost = (
    {
        title = '',
        body = '',
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_POST',
    post : {
        id: uuidv1(),
        title,
        body,
        createdAt: moment()
    }
})

export const editPost = (id, updates) => ({
    type: 'EDIT_POST',
    id,
    updates
});


export const removePost = ({ id } = {}) => ({
    type: 'REMOVE_POST',
    id
})