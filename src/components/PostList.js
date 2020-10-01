import React from 'react';
import { connect } from 'react-redux'
import PostListItem from './PostListItem';
import selectPosts from '../selectors/posts';

export const PostList = ({posts}) => (
    <div>
        <h1>THE POSTS!</h1>
        {posts.map((post) => {
            return <PostListItem key={post.id} {...post} />
        })}
    </div>
)

const mapStateToProps = state => ({
    posts: selectPosts(state.posts,state.filters)
})

export default connect(mapStateToProps)(PostList);


