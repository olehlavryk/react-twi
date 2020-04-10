import React from 'react';

import './app-header.css'

const AppHeader = ({liked, allPosts}) => {
    return (
        <div className="app-header d-flex">
            <h1>Oleh Lavryk</h1>
            <h2>{allPosts} posts, which like {liked} </h2>
        </div>
    );
};

export default AppHeader;