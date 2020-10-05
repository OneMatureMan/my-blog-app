import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startRemovePost, startEditPost } from '../actions/posts';
import PostForm from './PostForm';


export class EditPostPage extends React.Component {

    onSubmit = (post) => {
        this.props.startEditPost(this.props.post.id,post)
        this.props.history.push('/dashboard');
    }

    onRemovePost = () => {
        this.props.startRemovePost({ id: this.props.post.id});
        this.props.history.push('/dashboard');
    }

    render() {
        return (
            <div>
                {console.log(this.props.history.location.pathname)}
                {console.log(this.props.match.params.id)}
                <Link to={`/read/${this.props.match.params.id}`}>
                    <p>post readable at: {window.location.href.replace('edit', 'read')}</p>
                </Link>
                
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
    startEditPost : (id, updates) => dispatch(startEditPost(id, updates)),
    startRemovePost: (id) => dispatch(startRemovePost(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPostPage);