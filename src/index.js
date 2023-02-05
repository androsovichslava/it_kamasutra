import './index.css';
import store from './redux/state'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
    console.log('Hello from render')

    root.render(
        <BrowserRouter>
            <App
                state={state}
                dispatch={store.dispatch.bind(store)}
                store={store}
            />
        </BrowserRouter>
    );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

