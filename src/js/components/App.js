import React from 'react';
import List from './List';
import Form from './Form';
import Post from './Post';

const App = () => {
    return (
        <React.Fragment>
            <div>
                <h2>Articles</h2>
                <List />
            </div>
            <div>
                <h2>Add a new article</h2>
                <Form />
            </div>
            <div>
                <h2>
                    <Post />
                </h2>
            </div>
        </React.Fragment>
    );
}

export default App;