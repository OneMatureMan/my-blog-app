import React from 'react';
import { Link } from 'react-router-dom';

const PostListItem = ({ id, title, body, createdAt }) => (
    <Link to={`edit/${id}`}>
        <p>{title} - {createdAt.valueOf()}</p>
    </Link> 
);

export default PostListItem;