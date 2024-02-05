import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


const RepoDetailsPage = () => {
  const navigate = useNavigate();
  const {rePo, locaTion} = useParams();
  const repos = useSelector(state => state.repos.repos);
  const repo = repos.find(repo => repo.full_name === rePo+'/'+locaTion);

  const handleBack = ()=>{
    navigate('/repos');
  }

  return (
    <section className='container'>
      <button type="button" className="btn btn-primary m-2" onClick={handleBack}>🡸 Repo List</button>
      <div>
        <h1>Repository Details</h1>
        {repo ? (
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8 border border-secondary rounded-2 p-2'>
                <span className='d-flex'><a href={repo.owner.html_url} target='_blank' rel="noreferrer"><h2>{repo.owner.login}</h2></a><b><h2> / </h2></b><a href={repo.html_url} target='_blank' rel="noreferrer"><h2>{repo.name}</h2></a></span>
                <p>{(repo.stargazers_count / 1000).toFixed(2) + "k"} Stars</p>
                <p>{(repo.forks_count / 1000).toFixed(2) + "k"} Forks</p>
                <p>{repo.language} Language</p>
                <div className='d-flex align-items-center'>
                  <img className='border rounded-circle mx-1' style={{ width: '4em', height: '4em' }} src={repo.owner.avatar_url} alt='Avatar' /><h3 className='text-end'>{repo.name}</h3>
                  <button type="button" className="btn btn-outline-secondary mx-2" disabled>{repo.private ? "Private" : "Public"}</button>
                </div>
              </div>
              <div className='col-lg-4'>
                <h4>About</h4>
                <p>{repo.description}</p>
                <h4>Topics</h4>
                {repo.topics.map(item => <span key={item} className="badge rounded-pill text-primary px-3 m-2 bg-info-subtle fw-semibold">{item}</span>)}
              </div>
            </div>
          </div>
        ) : (
          <div>Loading repository details...</div>
        )}
      </div>
    </section>
  );
};

export default RepoDetailsPage;
