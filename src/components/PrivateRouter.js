import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';

const PrivateRouter = () => {
    const accessToken = useSelector(state=> state.auth.accessToken);
  return (
    accessToken ? <Outlet/> : <Navigate to="*" />
  )
};

export default PrivateRouter;