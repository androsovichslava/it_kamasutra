import { rerenderEntireTree } from "../render";

let state = {
    profilePage: {
        posts: [
            { id: 1, name: 'Пост 22222222222', likesCount: 12 },
            { id: 2, name: 'Пост 22222222222', likesCount: 12 },
            { id: 3, name: 'Пост 22222222222', likesCount: 12 },
            { id: 4, name: 'Пост 22222222222', likesCount: 132 },
            { id: 5, name: 'Пост 22222222222', likesCount: 123 },
            { id: 6, name: 'Пост 22222222222', likesCount: 13 },
            { id: 7, name: 'Пост 22222222222', likesCount: 1 }
        ]
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
};

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        name: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}
export default state;