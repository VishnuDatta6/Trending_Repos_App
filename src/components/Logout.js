import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router'
import { setAccessToken } from './A&R/reducers/authSlice';

const Logout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const accessToken = useSelector(state => state.auth.accessToken);

    const handleLogout = ()=>{
        dispatch(setAccessToken(null));
        navigate('/',{replace: true});
        const url = new URL(window.location);
        url.searchParams.delete('code');
        window.history.replaceState({}, document.title, url);
    };
  return (
    <div className='container text-end m-3'>
        { accessToken ? <button className='btn btn-danger' onClick={handleLogout}>Logout</button> : null }
    </div>
  );
};

export default Logout