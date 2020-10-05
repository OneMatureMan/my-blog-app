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
            <form className='form' onSubmit={this.onSubmit}>
                {this.state.error && <p className='form__error'>{this.state.error}</p>}
                <input 
                    className='text-input'
                    style={{width:'70%'}}
                    type="text"
                    name='title'
                    placeholder='Title'
                    autoFocus
                    value = {this.state.title}
                    onChange={this.handleTitleChange}
                />
                <textarea
                    className='textarea'
                    name='body'
                    placeholder='Enter the blogs body here'
                    value= {this.state.body}
                    onChange={this.handleBodyChange}
                />
                <div >
                    <button style={{marginRight:'5px'}} className='button'>Save Post</button>
                    {this.props.isEdit && <button 
                                                className='button button--secondary'
                                                onClick={this.props.onRemovePost}
                                            >
                                                Remove Post
                                            </button>
                    }
                </div>
                
                
            </form>
        )
    }
}


export default PostForm;