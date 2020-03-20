import React, { Component } from 'react';
import AppHeader from './../app-header/index';
import SearchPanel from './../search-panel/index';
import PostStatusFilter from './../post-status-filter/index';
import PostList from './../post-list/index';
import PostAddForm from './../post-add-form/index';

import './app.css';

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [
                { id: 1, label: "I'm goging to learn React", important: false },
                { id: 2, label: "I'll develop my own React application", important: false },
                { id: 3, label: "I'll sell my own React application", important: false }
            ]   
        }

        // bindings
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);

        this.maxId = 4;
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id == id);
            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            const newArr = [...before, ...after];

            return {
                data: newArr
            }
        });
    }

    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem];

            return {
                data: newArr
            }
        })

        
    }

    render() {
        return (
            <div className="app">
                <AppHeader />
                <div className="search-panel d-flex">
                    <SearchPanel />
                    <PostStatusFilter />
                </div>
                <PostList 
                    posts={this.state.data} 
                    onDelete={this.deleteItem}
                    />
                <PostAddForm 
                    addItem={this.addItem}
                />
            </div>
        );
    }

    
}

