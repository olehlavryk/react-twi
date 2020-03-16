import React from 'react';
import AppHeader from './../app-header/index';
import SearchPanel from './../search-panel/index';
import PostStatusFilter from './../post-status-filter/index';
import PostList from './../post-list/index';
import PostAddForm from './../post-add-form/index';

import './app.css';

const App = () => {

    const data = [
        { id: 1, label: "I'm goging to learn React", important: false },
        { id: 2, label: "I'll develop my own React application", important: false },
        { id: 3, label: "I'll sell my own React application", important: false }
    ];

    return (
        <div className="app">
            <AppHeader />
            <div className="search-panel d-flex">
                <SearchPanel />
                <PostStatusFilter />
            </div>
            <PostList posts={data} />
            <PostAddForm />
        </div>
    );
}

export default App;