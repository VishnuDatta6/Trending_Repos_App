import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Logout from "./Logout";
import { fetchTrendingRepos } from "./A&R/actions";

const PrivateRouter = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.accessToken);

  useEffect(()=>{
    dispatch(fetchTrendingRepos());
    // eslint-disable-next-line
  },[])

  return accessToken ? (
    <div>
      <Logout />
      <Outlet />
    </div>
  ) : (
    <Navigate to="*" />
  );
};

export default PrivateRouter;
