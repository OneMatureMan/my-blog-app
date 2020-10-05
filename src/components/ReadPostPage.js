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
        console.log(this.state)
        return (
             <div>
                 <button style={{color:'red'}}>sherket</button>
                <h1>{this.state.title}</h1>
                <p>{this.state.body}</p>
            </div>
        )
    }
} 


export default ReadPostPage;