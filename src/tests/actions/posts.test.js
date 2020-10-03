import { 
    addPost, 
    editPost, 
    removePost, 
    setPosts,
    startAddPost,
    startEditPost,
    startRemovePost,
    startSetPosts
    } from '../../actions/posts'
import posts from '../fixtures/posts';
import database from '../../firebase/firebase';

beforeEach((done) => {
    let postsData = {}
    posts.forEach(({ id, title, body, createdAt }) => {
        postsData[id] = {title, body, createdAt}
    })
    database.ref('posts').set(postsData).then(() => done())
})
test('should fire addPost action', () => {
    const action = addPost(posts[0]);
    expect(action).toEqual({
        type: 'ADD_POST',
        post: posts[0]
    });
});


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

test('should fire setPost action', () => {
    const action = setPosts([posts[0]]);
    expect(action).toEqual({
        type: 'SET_POSTS',
        posts: [
            posts[0]
        ]
    })
})