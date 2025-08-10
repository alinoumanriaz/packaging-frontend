"use client";

import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { clearUser, setUser } from "@/redux/slicers/currentUser";
import { GET_CURRENT_USER } from "@/graphql/queries/user.query";
import { useAppDispatch } from "@/redux/hooks";

const LoadCurrentUser = () => {
  const dispatch = useAppDispatch();
  const { data, loading } = useQuery(GET_CURRENT_USER, {
    fetchPolicy: "network-only",
  });
  console.log({reloadcUSer:data})

  useEffect(() => {
    if (!loading) {
        console.log({currentUserdata:data})
      if (data?.getCurrentUser) {
        dispatch(setUser(data.getCurrentUser.user));
      } else {
        dispatch(clearUser());
      }
    }
  }, [data, loading, dispatch]);

  return null; // no UI needed
};

export default LoadCurrentUser;
