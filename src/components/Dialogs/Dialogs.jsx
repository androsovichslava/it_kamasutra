import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'
import { DialogItem } from './DialogItem/DialogItem'
import { Message } from './Message/Message'

export const Dialogs = (props) => {
    console.log(props);

    let dialogsElements = props.messagePage.dialogs.map((dialog, index) => <DialogItem key={index} name={dialog.name} id={dialog.id} />);
    let messagesElements = props.messagePage.messages.map((message, index) => <Message key={index} message={message.message} id={message.id} />);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}
