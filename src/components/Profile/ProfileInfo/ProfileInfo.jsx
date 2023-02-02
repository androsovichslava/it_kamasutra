import React from 'react'
import s from './ProfileInfo.module.css'

export const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src="https://avatars.mds.yandex.net/i?id=42d33f2d251efea97f9d841e5cdbd3bc8673ceac-8496612-images-thumbs&n=13" alt="" />
            </div>
            <div className={s.descriptionBlock}>
                Инфа о юзере
            </div>
        </div>
    )
}
