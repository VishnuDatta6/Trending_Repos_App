import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { setAccessToken } from './A&R/reducers/authSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = ()=>{
    const clientId = process.env.REACT_APP_CLIENT_ID;
    const redirectUri = process.env.REACT_APP_REDIRECT_URI;
    const githubLoginUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}`;

    window.location.replace(githubLoginUrl);
  };

  useEffect(()=>{
    const handleAccessToken = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const receivedAccessToken = urlParams.get('code');

      if(receivedAccessToken) {
        dispatch(setAccessToken(receivedAccessToken));
        
        navigate('/repos', {replace: true});
      }
    };

    handleAccessToken();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
        <button className='btn btn-success' onClick={handleLogin}>
          Login with Github
        </button>       
    </div>
  );
};

export default Login;