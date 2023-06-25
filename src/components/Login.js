import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { setAccessToken } from './A&R/reducers/authSlice';
import store from './A&R/store';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = ()=>{
    const clientId = '16386e238106fb1a47d4';
    const redirectUri = 'http://localhost:3000/';
    const githubLoginUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}`;

    window.location.replace(githubLoginUrl);
  };

  const handleAccessToken = (receivedAccessToken) => {
    dispatch(setAccessToken(receivedAccessToken));
    navigate('/repos', {replace: true});
  };

  const checkForAccessToken = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const receivedAccessToken = urlParams.get('code');

    if (receivedAccessToken){
      handleAccessToken(receivedAccessToken);
    }
  };

  useEffect(()=>{
    checkForAccessToken();
    // eslint-disable-next-line
  }, []);

  const persistor = persistStore(store);

  return (
    <PersistGate loading={null} persistor={persistor}>
    <div>
        <button className='btn btn-success' onClick={handleLogin}>
          Login with Github
        </button>       
    </div>
    </PersistGate>
  );
};

export default Login;