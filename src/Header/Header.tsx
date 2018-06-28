import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { IAppState } from "../models";
import { checkLoggedIn } from "../utils";
import { logout, login, IAuthState } from "../Auth";
import "./Header.css";

interface IHeaderProps {
  auth: IAuthState;
  page: string;
  logoutFn: () => void;
  loginFn: () => void;
}

class Header extends React.Component<IHeaderProps> {
  public render() {
    const { auth, logoutFn, loginFn, page } = this.props;
    let loginButton;
    let userComponent;

    if (checkLoggedIn(auth.auth)) {
      loginButton = (
        <button className="btn btn-warning" onClick={logoutFn}>
          Log Out
        </button>
      );
    } else {
      loginButton = (
        <button className="btn btn-primary" onClick={loginFn}>
          Log In
        </button>
      );
    }

    if (auth.user !== null) {
      userComponent = (
        <span className="mr-3">
          <span className="navbar-text mr-3">{auth.user.email}</span>
          <img
            src={auth.user.picture}
            className="user-img img-thumbnail"
            alt={auth.user.nickname}
          />
        </span>
      );
    }

    return (
      <nav className="navbar navbar-light">
        <a href="#" className="navbar-brand">
          {page === "HERO_LIST" ? "Heroes" : "Hero Detail"}
        </a>
        <div className="">
          {userComponent}
          {loginButton}
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state: IAppState) {
  return {
    auth: state.auth,
    page: state.page,
  } as Partial<IHeaderProps>;
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    logoutFn: () => dispatch(logout()),
    loginFn: () => dispatch(login()),
  } as Partial<IHeaderProps>;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
