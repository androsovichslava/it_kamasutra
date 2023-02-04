import './index.css';
import store from './redux/state'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {

    root.render(
        <BrowserRouter>
            <App
                state={state}
                dispatch={store.dispatch.bind(store)}
                updateNewPostText={store.updateNewPostText.bind(store)}
                store={store}
            />
        </BrowserRouter>
    );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

