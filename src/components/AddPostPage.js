import React from 'react';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import { startAddPost } from '../actions/posts';


export class AddPostPage extends React.Component {
    onSubmit = (post) => {
        this.props.startAddPost(post)
        this.props.history.push('/dashboard');
    }

    render() {
        return (
            <PostForm 
                onSubmit={this.onSubmit}
            />
        );
    };
};


const mapDispatchToProps = (dispatch) => ({
    startAddPost: (post) => dispatch(startAddPost(post))
})

export default connect(undefined, mapDispatchToProps)(AddPostPage);