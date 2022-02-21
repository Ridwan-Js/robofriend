import React, { components } from "react";

class ErrorrBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasErrorr: false,
    };
  }
  componentDidCatch(error, info) {
    this.setState({
      hasErrorr: true,
    });
  }
  render() {
    if (this.state.hasErrorr) {
      return <h1>OOPS! Something went wrong</h1>;
    }
    return this.props.children;
  }
}

export default ErrorrBoundary;
