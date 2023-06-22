import React from 'react'
import Login from './Login'

const Home = () => {
  return (
    <div className='container d-flex flex-column justify-content-center align-items-center vh-100 text-center w-75 gap-3 border rounded-3 m-auto'>
      <h1>Welcome to the Trending Git Repos App!</h1>
      <p className='text-secondary'>
        Explore the trending repositories on GitHub and stay up-to-date with the latest developments in the software
        development community. This app provides you with a curated list of trending repositories based on the GitHub
        community's excitement.
      </p>
      <p className='.text-info-emphasis'> Log in to access the full features and details of the trending repos.</p>
      <Login />
    </div>
  )
}

export default Home