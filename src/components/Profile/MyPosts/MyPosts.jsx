import React from 'react'
import s from './MyPosts.module.css'
import { Post } from './Post/Post'

export const MyPosts = (props) => {
    console.log(props.postData);

    let postElements = props.postData.posts.map(post => <Post name={post.name} likesCount={post.likesCount} />);
    let newPostElement = React.createRef();
    let addPost = () => {
        props.addPost();


    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);

    }
    return (<div className={s.postsBlock}>
        <h1>
            My post
        </h1>
        <div className={s.newpost}>
            <div>
                <textarea
                    ref={newPostElement}
                    value={props.postData.newPostText}
                    onChange={onPostChange}
                />
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
