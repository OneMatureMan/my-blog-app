import React from 'react';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import { addPost } from '../actions/posts';


export class AddPostPage extends React.Component {

    onSubmit = (expense) => {
        this.props.addPost(expense)
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
    addPost : (post) => dispatch(addPost(post))
})

export default connect(undefined, mapDispatchToProps)(AddPostPage);