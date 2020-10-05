import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const PostListItem = ({ id, title, createdAt }) => (
    <Link className='list-item' to={`edit/${id}`}>
        <h3 className='list-item__title'>{title}</h3>
        <p className='list-item__sub-title'>created at: {moment(createdAt).format("dddd, MMMM Do YYYY")}</p>
    </Link> 
);

export default PostListItem;