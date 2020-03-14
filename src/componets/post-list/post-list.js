import React from 'react';
import PostListItem from './../post-list-item/index'

import './post-list.css'

const PostList = () => {
    return (
        <ul className="app-list list-group">
            <PostListItem />    
            <PostListItem />    
            <PostListItem />    
        </ul>
    );
}

export default PostList;