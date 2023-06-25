import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const RepoListPage = () => {
  const repos = useSelector(state => state.repos.repos);
  const loading = useSelector(state => state.repos.loading);
  const error = useSelector(state => state.repos.error);
  const accessToken = useSelector(state => state.auth.accessToken);
  const [filteredRepos, setFilteredRepos] = useState([])
  const [languageFilter, setLanguageFilter] = useState('');
  const languages = [...new Set(repos.map(obj => obj.language))];
  useEffect(() => {
    filterRepos();
    // eslint-disable-next-line
  }, [languageFilter]);

  const filterRepos = () => {
    let filtered = [...repos];
    if (languageFilter) {
      filtered = filtered.filter(repo => repo.language === languageFilter);
    }
    setFilteredRepos(filtered);
  };

  if (!accessToken) {
    return <div>You need to login to view this page</div>;
  }
  if (loading) {
    return (<div className="spinner-border text-primary mx-5" role="status">
      <span className="visually-hidden">Loading trending repos</span>
    </div>);
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <section>
      <div className='container text-center bg-light border rounded-2 p-4'>
        <h1>Trending</h1>
        <p className='text-secondary'>See what the GitHub community is most excited about today.</p>
      </div>
      <div className='container'>
        <div className="d-flex justify-content-between">
          <h3 className="badge text-bg-primary m-3 p-3">Repositories</h3>
          <div className="btn-group m-3">
            <button type="button" className="btn btn-secondary dropdown-toggle text-white" data-bs-toggle="dropdown" aria-expanded="false">
              Language
            </button>
            <ul className="dropdown-menu" aria-labelledby="languageFilter">
              <li>
                <button className="dropdown-item" type="button" value="" onClick={(e) => setLanguageFilter(e.target.value)}>
                  All
                </button>
              </li>
              {languages.map((lan) => {
                return (
                  <li key={lan}>
                    <button className="dropdown-item" type="button" value={lan} onClick={(e) => setLanguageFilter(e.target.value)}>
                      {lan === null ? "Unknown" : lan}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {filteredRepos.length > 0 ? (
          filteredRepos.map(ele => {
            return (
              <div className='container border p-3' key={ele.id}>
                <h2><Link to={`/repos/${ele.full_name}`}>{ele.full_name}</Link></h2>
              </div>)
          }
          )) : <div>No trending repos found.</div>}
      </div>
    </section>)
}

export default RepoListPage;
