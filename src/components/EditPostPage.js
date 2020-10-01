import React from 'react';
import { connect } from 'react-redux';
import { editPost, removePost } from '../actions/posts';
import PostForm from './PostForm';


export class EditPostPage extends React.Component {

    onSubmit = (post) => {
        this.props.editPost(this.props.post.id,post);
        this.props.history.push('/dashboard');
    }

    onRemovePost = () => {
        this.props.removePost({ id: this.props.post.id});
        this.props.history.push('/dashboard');
    }

    render() {
        return (
            <div>
                <PostForm 
                    onSubmit={this.onSubmit}
                    post={this.props.post}
                />
                <button onClick={this.onRemovePost}>Remove Post</button>
            </div>
        );
    };
};

const mapStateToProps = (state,props) => ({
    post: state.posts.find(post => post.id === props.match.params.id)   
})


const mapDispatchToProps = (dispatch) => ({
    editPost : (id, updates) => dispatch(editPost(id, updates)),
    removePost: (id) => dispatch(removePost(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPostPage);