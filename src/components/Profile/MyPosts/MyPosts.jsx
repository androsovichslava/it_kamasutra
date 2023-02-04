import React from 'react'
import s from './MyPosts.module.css'
import { Post } from './Post/Post'
import { addUpdatePostTextActionCreator, addPostActionCreator } from '../../../redux/state'

export const MyPosts = (props) => {
    let postElements = props.posts.map((post, index) => <Post key={index} name={post.name} likesCount={post.likesCount} />);
    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(addUpdatePostTextActionCreator(text));
        console.log(text);
    }
    return (<div className={s.postsBlock}>
        <h1>
            My post
        </h1>
        <div className={s.newpost}>
            <div>
                <textarea
                    ref={newPostElement}
                    value={props.newPostText}
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
