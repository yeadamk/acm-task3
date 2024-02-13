import React, { useState } from 'react';
import './Post.css';

const Post = ({ post }) => {
    const [likes, setLikes] = useState(post.likes);

    return (
        <div className="post">
            <h2 className="post-title">{post.title}</h2>
            <p className="post-content">{post.content}</p>
            <button className="like-button" onClick={() => setLikes(likes + 1)}>Like ({likes})</button>
        </div>
    );
};

export default Post;