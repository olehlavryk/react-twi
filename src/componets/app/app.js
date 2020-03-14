import React from 'react';
import AppHeader from './../app-header/index';
import SearchPanel from './../search-panel/index';
import PostStatusFilter from './../post-status-filter/index';
import PostList from './../post-list/index';
import PostAddForm from './../post-add-form/index';

import './app.css';

const App = () => {
    return (
        <div className="app">
            <AppHeader />
            <div className="search-panel d-flex">
                <SearchPanel />
                <PostStatusFilter />
            </div>
            <PostList />
            <PostAddForm />
        </div>
    );
}

export default App;