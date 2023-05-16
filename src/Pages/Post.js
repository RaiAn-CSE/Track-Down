import React from 'react';
import postCSS from './Post.module.css'

const Post = () => {
    return (
        <div className={`min-h-screen ${postCSS.postSection}`}>
            <div>
                <h1>hi there</h1>
            </div>
        </div>
    );
};

export default Post;