import * as React from 'react';
import { connect, Dispatch } from "react-redux";
import { IAppState } from '../models';
import { IAuth0 } from '../models';
import { checkLoggedIn } from '../utils';
import { logout, login } from '../Auth';

interface IHeaderProps {
  auth: IAuth0,
  logoutFn: () => void,
  loginFn: () => void,
}

class Header extends React.Component<IHeaderProps> {
  public render() {
    const {
      auth,
      logoutFn,
      loginFn,
    } = this.props;
    let loginButton;

    if (checkLoggedIn(auth)) {
      loginButton = (
        <button
          className="btn btn-warning"
          onClick={() => logoutFn()}
        >
          Log Out
        </button>
      )
    } else {
      loginButton = (
        <button
          className="btn btn-primary"
          onClick={() => loginFn()}
        >
          Log In
        </button>
      )
    }

    return (
      <div>
        {loginButton}
      </div>
    )
  }
}

function mapStateToProps(state: IAppState) {
  return {
    auth: state.auth.auth,
  } as Partial<IHeaderProps>
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    logoutFn: () => dispatch(logout()),
    loginFn: () => dispatch(login()),
  } as Partial<IHeaderProps>
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
