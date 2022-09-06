import React from 'react';
import './App.css';
import CMainRouter from './Components/CMainRouter';
import Template from './Components/Template';
import 'antd/dist/antd.css';

function App() {
  return (
    <>
      <Template>
        <CMainRouter />
      </Template>
    </>
  );
}

export default App;
