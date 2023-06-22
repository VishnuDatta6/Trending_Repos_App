import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { setAccessToken } from './A&R/reducers/authSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = ()=>{
    const clientId = '16386e238106fb1a47d4';
    const redirectUri = 'http://localhost:3000/';
    const githubLoginUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}`;

    window.location.replace(githubLoginUrl);
  };


  useEffect(()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const receivedAccessToken = urlParams.get('code');
    if (receivedAccessToken) {
      dispatch(setAccessToken(receivedAccessToken));
      navigate('/repos', {replace:true});
    }
  }, [dispatch, navigate]);

  return (
    <div>
        <button className='btn btn-success' onClick={handleLogin}>Login with Github</button>       
    </div>
  );
};

export default Login;