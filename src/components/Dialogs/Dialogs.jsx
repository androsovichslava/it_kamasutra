import React from 'react'
import s from './Dialogs.module.css'
import { DialogItem } from './DialogItem/DialogItem'
import { Message } from './Message/Message'
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/state'

export const Dialogs = (props) => {
    let state = props.store.getState().dialogPage;
    console.log(props);
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        let action = updateNewMessageBodyCreator(body);
        console.log(action)
        props.store.dispatch(action);
    }

    let dialogsElements = state.dialogs.map((dialog, index) => <DialogItem key={index} name={dialog.name} id={dialog.id} />);
    let messagesElements = state.messages.map((message, index) => <Message key={index} message={message.message} id={message.id} />);
    let newMessageBody = state.newMessageBody;
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>
                    {messagesElements}
                </div>
                <div><textarea
                    value={newMessageBody}
                    onChange={onNewMessageChange}
                    placeholder='enter you message'

                ></textarea></div>
                <div><button onClick={onSendMessageClick}>Добавить сообщение</button></div>
            </div>
        </div>
    )
}
