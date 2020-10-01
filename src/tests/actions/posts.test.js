import { addPost, editPost, removePost } from '../../actions/posts'
import posts from '../fixtures/posts';
import moment from 'moment';

test('should fire addPost action', () => {
    const post = {
        title: 'Flag Back',
        body: 'Remove all closure',
        createdAt: moment()
    }
    const action = addPost(post);
    expect(action).toEqual({
        type: 'ADD_POST',
        post: {
            ...post,
            id: expect.any(String)
        }
    });
});

test('should setup add post action if empty', () => {
    const action = addPost();
    expect(action).toEqual({
        type: 'ADD_POST',
        post: {
            id: expect.any(String),
            title: '',
            body: '',
            createdAt: moment()
        }
    })
})


test('should fire editPost action', () => {
    const action = editPost('1',{ body: 'I dont watch anything'})
    expect(action).toEqual({
        type: 'EDIT_POST',
        id: '1',
        updates: {
            body: 'I dont watch anything'
        }
    })
})

test('should fire removePost action', () => {
    const action = removePost({ id: '1'});
    expect(action).toEqual({
        type: 'REMOVE_POST',
        id: '1'
    })
})