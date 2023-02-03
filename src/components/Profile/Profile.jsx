import React from 'react'
import { MyPosts } from './MyPosts/MyPosts'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'
import s from './Profile.module.css'

export const Profile = (props) => {
    console.log(props.addPost);
    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts
                postData={props.postData}
                addPost={props.addPost}
            />
        </div>
    )
}
