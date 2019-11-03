import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getData } from "../actions/index";

const PostData = (props) => {

    useEffect(() => {
        props.getData();
    });

    return (
        <ul>
            {props.articles.map(el => (
                <li key={el.id}>{el.title}</li>
            ))}
        </ul>

    );
}

const mapStateToProps = (state) => ({
    articles: state.remoteArticle.slice(0, 10)
})

const Post = connect(mapStateToProps, { getData })(PostData);

export default Post;