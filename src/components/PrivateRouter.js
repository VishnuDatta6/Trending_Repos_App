import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter = () => {
  const accessToken = useSelector(state=> state.auth.accessToken);
  useEffect(()=>{
    console.log(accessToken);
  })
  return (
    accessToken ? <Outlet/> : <Navigate to="*" />
  )
};

export default PrivateRouter;