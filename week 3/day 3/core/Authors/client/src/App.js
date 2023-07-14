import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Add from './components/Add';
import Update from './components/Update';

function App() {
    return (
    <div className="App">
      <h1 className='text-center'>Favorite authors</h1>
        <Routes>
            <Route element={<Main/>} path="/" />
            <Route element={<Add/>} path="/new" />
            <Route element={<Update/>} path="/edit/:id"/>
        </Routes>                         
    </div>
    );
}
export default App;
