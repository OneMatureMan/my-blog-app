import React from 'react';
import { Link } from 'react-router-dom';

const PostListItem = ({ id, title, createdAt }) => (
    <Link to={`edit/${id}`}>
        <p>{title} - {createdAt}</p>
    </Link> 
);

export default PostListItem;