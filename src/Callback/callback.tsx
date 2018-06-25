import * as React from "react";
import { connect } from "react-redux";
import { IAppState } from "../models";
import { requestLoginCallback } from '../Auth';

interface IAppProps {
  requestLoginCallback: () => void;
}

interface IStateProps {
  history: any;
  loading: boolean,
  error: any,
}

interface ILoginCallbackContainerComponentProps extends IStateProps, IAppProps { }

class LoginCallbackContainerComponent extends React.Component<
  ILoginCallbackContainerComponentProps,
  {}
  > {
  public componentDidMount() {
    this.props.requestLoginCallback();
  }

  public render() {
    return (<div>Loading...</div>);
  }
}

const mapDispatchToProps = (dispatch: any): IAppProps => ({
  requestLoginCallback: () => dispatch(requestLoginCallback()),
});

const mapStateToProps = (state: IAppState, ownProps: any): IStateProps => {
  return {
    loading: state.heroes.loading,
    error: state.heroes.error,
    history: ownProps.history
  };
};

export default connect<IStateProps, IAppProps, void>(
  mapStateToProps,
  mapDispatchToProps
)(LoginCallbackContainerComponent);
