import firebase from '../firebase/firebase';
import moment from 'moment';

export const addPost = (post) => ({
    type: 'ADD_POST',
    post 
});

export const startAddPost = ( postData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        const {
            title = '',
            body = ''
        } = postData;
        const post = { title, body, createdAt: moment().valueOf()}
        return firebase.ref(`users/${uid}/posts`).push(post).then((snapshot) => {
            dispatch(addPost({
                        id: snapshot.key, 
                        ...post
                    }));
        });
    }
}

export const editPost = (id, updates) => ({
    type: 'EDIT_POST',
    id,
    updates
});

export const startEditPost = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return firebase.ref(`users/${uid}/posts/${id}`).update(updates).then(() => {
            dispatch(editPost(id, updates))
        })
    }
}


export const removePost = ({ id } = {}) => ({
    type: 'REMOVE_POST',
    id
});

export const startRemovePost = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        firebase.ref(`users/${uid}/posts/${id}`).remove().then(() => {
            dispatch(removePost({ id }));
        })
    }
}

export const setPosts = (posts) => ({
    type: 'SET_POSTS',
    posts
})

// export const startGetPost = (id) => {
//     return () => {
//         let prop;
//         return firebase.ref('users').once('value').then(users => {
//             users.forEach(user => {
//               user.child('posts').forEach(post => {
//                   if (post.key === id) {
//                     prop = (post.val())
//                   }
//               })
//             })
//         })
//     }
// }


export const startSetPosts = () => {
    return (dispatch, getState) => {
        let posts = []
        const uid = getState().auth.uid
        
        return firebase.ref(`users/${uid}/posts`).once('value', snapshots => {
            snapshots.forEach(snapshot => {
                posts.push({
                    id: snapshot.key,
                    ...snapshot.val()
                })
            })
        }).then(() => dispatch(setPosts(posts)))
    }
}