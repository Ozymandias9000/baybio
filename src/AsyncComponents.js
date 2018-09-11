import React from "react";

import Loadable from "react-loadable";
import Loading from "./components/Loading/Loading";

// Lazy-loading with react-loadable
function Load(props) {
  if (props.error) {
    return (
      <div className="flex-container--center">
        Oh nooess! Error!
        <button onClick={props.retry}>Retry</button>
      </div>
    );
  } else if (props.pastDelay) {
    return <Loading />;
  } else {
    return null;
  }
}

export const UserMain = Loadable({
  loader: () => import("./components/UserMain/UserMain"),
  loading: Load
});

export const NewPost = Loadable({
  loader: () => import("./components/UserMain/NewPost/NewPost"),
  loading: Load
});

export const Register = Loadable({
  loader: () => import("./components/Register/Register"),
  loading: Load
});

export const SignIn = Loadable({
  loader: () => import("./components/SignIn/SignIn"),
  loading: Load
});

export const NotFound = Loadable({
  loader: () => import("./components/NotFound/NotFound"),
  loading: Load
});

export const MaevePage = Loadable({
  loader: () => import("./components/MaevePage/MaevePage"),
  loading: Load
});
