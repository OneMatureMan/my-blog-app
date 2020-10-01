import postReducer from '../../reducers/posts';
import posts from '../fixtures/posts';

test('should set up default post values', () => {
    const result = postReducer(undefined,  {type: '@@INIT'});
    expect(result).toEqual([])
})


test('should add a post to array', () => {
    const state = posts
    const action = {
        type: 'ADD_POST',
        post: posts[0]
    }
    const result = postReducer(state,action)
    expect(result).toEqual([
        ...posts,
        posts[0]
    ])
});

test('should edit a post correctly', () => {
    const state = posts;
    const action = {
        type: 'EDIT_POST',
        id: '1',
        updates: {
            title: 'Make me forget!'
        }
    }
    const result = postReducer(state, action)
    expect(result).toEqual([{ ...posts[0], title: 'Make me forget!'},posts[1],posts[2]])
});

test('should remove post from array', () => {
    const state = [posts[0]];
    const action = {
        type: 'REMOVE_POST',
        id: '1'
    }
    const result = postReducer(state,action);
    expect(result).toEqual([])
})