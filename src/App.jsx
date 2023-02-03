import './App.css';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import { Dialogs } from './components/Dialogs/Dialogs';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = (props) => {
  console.log(props.addPost);
  return (

    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialogs' element={<Dialogs
            messageData={props.appState.messagesPage.messages}
            dialogsData={props.appState.messagesPage.dialogs} />}
          />
          <Route path='/'
            element={
              <Profile
                state={props.appState.profilePage}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
              />}
          />
          <Route path='/profile'
            element={
              <Profile
                state={props.appState.profilePage}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
              />}
          />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
