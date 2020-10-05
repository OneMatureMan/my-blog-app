import React from 'react';
import firebase from '../firebase/firebase';


class ReadPostPage extends React.Component {
    state = {
        title:'',
        body:'',
        createdAt: 0
    }

    componentDidMount() {
        this.getPost(this.props.match.params.id)
 
        
    }
    
    getPost = (id) => {
        firebase.ref('users').once('value', users => {
            users.forEach(user => {
                user.child('posts').forEach(post => {
                    if (post.key === id) {
                        let { title, body, createdAt} = post.val()
                        this.setState({title, body, createdAt})
                    }
                })
            })
        })
    }


    render() {
        return (
            <div className='box-layout--read'>
                <div className="box-layout--readable-post">
                    <h1 className='box-layout--readable-post__title'>{this.state.title}</h1>
                    <p>{this.state.body}</p>
                </div>
            </div>
            
        )
    }
} 


export default ReadPostPage;