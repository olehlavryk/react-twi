import React, { Component } from 'react';

import './post-add-form.css';

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);

        // state
        this.state = {
            text: ''
        }

        // bindings
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.addItem(this.state.text)

        // clear state
        this.setState({
            text: ''
        });

    }

    render() {
        return (
            <form 
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit}
            >
                <input 
                    type="text"
                    placeholder="What are you thinking about?"
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                    value={this,this.state.text}
                />
                <button 
                    type="submit"
                    className="btn btn-outline-secondary"
                >Add</button>
            </form>
        );
    }
    
}