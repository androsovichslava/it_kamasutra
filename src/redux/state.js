let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, name: 'Пост 22222222222', likesCount: 12 },
                { id: 2, name: 'Пост 22222222222', likesCount: 12 },
                { id: 3, name: 'Пост 22222222222', likesCount: 12 },
                { id: 4, name: 'Пост 22222222222', likesCount: 132 },
                { id: 5, name: 'Пост 22222222222', likesCount: 123 },
                { id: 6, name: 'Пост 22222222222', likesCount: 13 },
                { id: 7, name: 'Пост 22222222222', likesCount: 1 }
            ],
            newPostText: 'it-kamasutra'
        },
        messagesPage: {
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
            ]
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
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newtext;
            this.__callSubscriber(this._state);
        }
    }

}
export default store;
window.store = store;