import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PrivateRouter from './components/PrivateRouter';
import RepoListPage from './components/RepoListPage';
import RepoDetailsPage from './components/RepoDetailsPage';
import NotFound from './components/NotFound';
import Logout from './components/Logout';
import { useSelector } from 'react-redux';

function App() {
  const repoLocation = useSelector(state => state.location);
  return (
    <>
      <Router>
        <Logout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<PrivateRouter />}>
            <Route exact path="/repos" element={<RepoListPage />} />
            <Route exact path={`repos/${repoLocation}`} element={< RepoDetailsPage repoLocation={repoLocation} />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
