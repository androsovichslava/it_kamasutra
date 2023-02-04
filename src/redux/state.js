const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, name: 'Пост 22222222222', likesCount: 12 },
                { id: 2, name: 'Пост 22222222222', likesCount: 12 },
                { id: 7, name: 'Пост 22222222222', likesCount: 1 }
            ],
            newPostText: 'it-kamasutra'
        },
        dialogPage: {
            dialogs: [
                { id: 1, name: 'Dimych' },
                { id: 2, name: 'Sasha' },
                { id: 3, name: 'Petya' },
                { id: 4, name: 'Sveta' },
                { id: 5, name: 'Katya' },
                { id: 6, name: 'Dimych' },
                { id: 7, name: 'Dimych' }
            ],
            messages: [
                { id: 1, message: 'Привет', likesCount: 12 },
                { id: 2, message: 'Как дела', likesCount: 12 },
                { id: 3, message: 'Ура', likesCount: 12 },
                { id: 4, message: 'Я пошел', likesCount: 132 },
                { id: 5, message: 'Katya', likesCount: 123 },
                { id: 6, message: 'Dimych', likesCount: 13 },
                { id: 7, message: 'Dimych', likesCount: 1 }
            ],
            newMessageBody: ''
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state chnged');
    },
    addPost() {
        let newPost = {
            id: 5,
            name: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this.__callSubscriber(this._state);
    },
    updateNewPostText(newtext) {
        this._state.profilePage.newPostText = newtext;
        this.__callSubscriber(this._state);
    },
    subscribe(observer) {
        this.__callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                name: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this.__callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newtext;
            this.__callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogPage.newMessageBody;
            this._state.dialogPage.newMessageBody = '';
            this._state.dialogPage.messages.push({ id: 6, message: body });
            this._callSubscriber(this._state);
        }
    }

}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const addUpdatePostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newtext: text })
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default store;
window.store = store;