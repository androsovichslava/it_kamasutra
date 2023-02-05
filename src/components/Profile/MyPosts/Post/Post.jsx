import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://klike.net/uploads/posts/2019-12/1576320884_39.jpg' />

            <div>
                <span>{props.message}</span> <span>like</span> <span> {props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;