import React from 'react';


class PostForm extends React.Component {
    state = {
        title: this.props.post ? this.props.post.title : '',
        body: this.props.post ? this.props.post.body : '',
        error: ''
    }


    handleTitleChange = (e) => {
        const title = e.target.value;
        this.setState(({ title }))
    }
    
    handleBodyChange = (e) => {
        const body = e.target.value;
        this.setState(({ body }))
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.title || !this.state.body) {
            return this.setState(({ error: 'Please enter both title and body'}))
        }
        this.setState(({ error: '' }))
        this.props.onSubmit({
            title: this.state.title,
            body: this.state.body
        })        
    }
    
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                {this.state.error && <p>{this.state.error}</p>}
                <input 
                    type="text"
                    name='title'
                    placeholder='Title'
                    autoFocus
                    value = {this.state.title}
                    onChange={this.handleTitleChange}
                />
                <textarea
                    name='body'
                    placeholder='Enter the blogs body here'
                    value= {this.state.body}
                    onChange={this.handleBodyChange}
                />
                <button>Save Post</button>
            </form>
        )
    }
}


export default PostForm;