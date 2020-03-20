import React from 'react';
import PostListItem from './../post-list-item/index'

import './post-list.css'

const PostList = ({posts, onDelete}) => {

    const elements = posts.map((item) => {
        const {id, ...propsItem} = item        

        return(
            <li key={id} className="list-group-item">
                <PostListItem {...propsItem}
                    onDelete={() => onDelete(id)}
                />
            </li>
        );
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default PostList;