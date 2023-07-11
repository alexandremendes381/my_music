import React from 'react';
import ScreenLogin from '../src/views/screenLoguin/index.js';

import './index.css'
import ScreenPost from './views/screenPosts/index.js';

function App() {
  return (
    <div id="app-container">
      <div id="background">
      </div>
      <header>
        <div>
          <ScreenPost/>
        </div>
        <div className="screen-login-container">
          <ScreenLogin />
        </div>
      </header>
    </div>
  );
}

export default App;
