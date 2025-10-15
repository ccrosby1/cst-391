import React from 'react';
import './Post.css';

const Post = (porps) => {
    return (
        <div className='post-container'>
            <span>Blog entry # {porps.id}</span>
            <p>{porps.text}</p>
            <button onCLick={() => porps.onDelete(porps.id)}>Delete</button>
        </div>
    );
};

export default Post;