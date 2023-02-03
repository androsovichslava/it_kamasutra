import React from 'react'
import s from './MyPosts.module.css'
import { Post } from './Post/Post'

export const MyPosts = (props) => {

    let postElements = props.postData.map(post => <Post name={post.name} likesCount={post.likesCount} />);
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        console.log(props.addPost);
        props.addPost(text);

    }
    return (<div className={s.postsBlock}>
        <h1>
            My post
        </h1>
        <div className={s.newpost}>
            <div>
                <textarea ref={newPostElement} />
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postElements}
        </div>

    </div>
    )
}
