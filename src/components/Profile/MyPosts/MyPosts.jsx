import React from 'react'
import s from './MyPosts.module.css'
import { Post } from './Post/Post'

export const MyPosts = (props) => {
    let postElements = props.postData.map(post => <Post name={post.name} />);
    console.log(props.postData);

    return (<div className={s.postsBlock}>
        <h1>
            My post
        </h1>
        <div className={s.newpost}>
            <div>
                <textarea name="" id="" cols="30" rows="2"></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postElements}
        </div>

    </div>
    )
}
