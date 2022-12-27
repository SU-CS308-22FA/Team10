import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";

class RequireAuth extends Component {
  state = { isAuthenticated: false };

  componentDidMount = () => {
    if (!this.state.isAuthenticated) {
      this.props.history.push("/");
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (
      this.props.location.pathname !== prevProps.location.pathname &&
      !this.state.isAuthenticated
    ) {
      this.props.history.push("/");
    }
  };

  isAuthed = () => this.setState({ isAuthenticated: true });

  unAuth = () => this.setState({ isAuthenticated: false });

  render = () =>
    !this.state.isAuthenticated ? (
      <Login isAuthed={this.isAuthed} />
    ) : (
      <Fragment>
        <Header unAuth={this.unAuth} />
        {this.props.children}
      </Fragment>
    );
}

export default withRouter(RequireAuth);