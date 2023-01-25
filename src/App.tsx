import React, { memo } from 'react';
import viteLogoInPublic from '/vite.svg';
import reactLogoSrc from './assets/react.svg';
import './App.css';

function App(): React.ReactElement {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogoInPublic} className="logo" alt="Vite logo" />
        </a>
        <a href="https://beta.reactjs.org" target="_blank">
          <img src={reactLogoSrc} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default memo(App);
