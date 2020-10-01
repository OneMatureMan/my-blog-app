const postsDefaultState = []

const postsReducer = (state = postsDefaultState, action) => {
    switch (action.type) {
        case 'ADD_POST':
            return state.concat({ id:action.id, ...action.post});
        case 'EDIT_POST':
            return state.map(post => {
                if (post.id === action.id) {
                    return {
                        ...post,
                        ...action.updates
                    }
                } else {
                    return post;
                }
            })
        case 'REMOVE_POST':
            return state.filter(({ id }) => id !== action.id)
        default :
            return state;
    }
}

export default postsReducer;