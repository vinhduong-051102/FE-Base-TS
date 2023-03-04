import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from '@/shared/ErrorPage';

function App() {

  return (
    <Routes>
      <Route path='' element={<ErrorPage code={'404'} />} />
    </Routes>
  );
}

export default App;
