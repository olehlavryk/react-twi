import React from 'react';

import './post-add-form.css';

const PostAddForm = () => {
    return (
        <div className="fbottom-panel d-flex">
            <input 
                type="text"
                placeholder="What are you thinking about?"
                className="form-control new-post-label"
            />
            <button 
                type="submit"
                className="btn btn-outline-secondary"
            >
                Add
            </button>
               
        </div>
    );
}

export default PostAddForm;

