import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PrivateRouter from './components/PrivateRouter';
import RepoListPage from './components/RepoListPage';
import RepoDetailsPage from './components/RepoDetailsPage';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<PrivateRouter />}>
            <Route path="/repos" element={<RepoListPage />} />
            <Route path="/repos/:rePo/:locaTion" element={< RepoDetailsPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
