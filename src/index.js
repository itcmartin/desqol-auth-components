import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import WiredRegistration from './WiredRegistration';
import WiredLogin from './WiredLogin';
import Logout from './Logout';
import Profile from './Profile';

import './styles.css';

function Index() {
  return <h2>Home</h2>;
}

function Registration() {
  return <WiredRegistration
    onSuccess={e => alert('success: ' + JSON.stringify(e))}
    onFailure={e => alert('failure: ' + JSON.stringify(e))}
    onError={e => alert('error: ' + JSON.stringify(e))}
    />;
}

function Login() {
  return <WiredLogin
    onSuccess={e => alert('success: ' + JSON.stringify(e))}
    onFailure={e => alert('failure: ' + JSON.stringify(e))}
    onError={e => alert('error: ' + JSON.stringify(e))}
  />;
}

function App() {
  return (
    <div className='App'>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/registration">Registration</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
          <Route path="/" exact component={Index} />
          <Route path="/registration" component={Registration} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);


// <hr />

// <hr />
// <Profile onUpdate={e => alert(JSON.stringify(e))} />
// <hr />
// <Logout onLogout={e => alert(JSON.stringify(e))} />
// <hr/>