import React from 'react';
import { connect } from 'react-redux'
import PostListItem from './PostListItem';
import selectPosts from '../selectors/posts';

export const PostList = ({posts}) => (
    <div className='content-container'>
        <div className="list-header">
            <h1>Posts</h1>
        </div>
        <div className="list-body">
            {
                    posts.length === 0 ? (
                        <div className="list-item--message">No posts</div>
                ) : (
                    posts.map(post => {
                        return <PostListItem key={post.id} {...post}/>
                    })
                )
            }
        </div>
        
        
    </div>
)

const mapStateToProps = state => ({
    posts: selectPosts(state.posts,state.filters)
})

export default connect(mapStateToProps)(PostList);


