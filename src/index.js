import React from 'react';
import ReactDOM from 'react-dom';

import WiredRegistration from './WiredRegistration';
import WiredLogin from './WiredLogin';
import Logout from './Logout';
import Profile from './Profile';

import './styles.css';

function App() {
  return (
    <div className='App'>
      <WiredRegistration
        onSuccess={e => alert(JSON.stringify(e))}
        onFailure={e => alert(JSON.stringify(e))}
        onError={e => alert(JSON.stringify(e))}
      />
      <hr />
      <WiredLogin
        onSuccess={e => alert(JSON.stringify(e))}
        onFailure={e => alert(JSON.stringify(e))}
        onError={e => alert(JSON.stringify(e))}
      />
      <hr />
      <Profile />
      <hr />
      <Logout />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
