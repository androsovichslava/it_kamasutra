import React from 'react'
import s from './Post.module.css'

export const Post = (props) => {
    return (
        <div className={s.item}>
            <div>
                <img src="https://android-obzor.com/wp-content/uploads/2022/03/258825-frederika-2048x1280.jpg" alt="" />
            </div>
            <div className={s.message_text}>
                {props.name}
            </div>
        </div>
    )
}
