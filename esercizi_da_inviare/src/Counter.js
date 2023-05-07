import CounterDisplay from "./CounterDisplay";
import React from "react";

class Counter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: props.start
      };

      this.interval = null;
    }

    componentDidMount() {
      this.interval = setInterval(() => {
        this.setState(state => ({
          count: state.count + this.props.add
        }));
      }, this.props.ms);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    render() {
      return <CounterDisplay count={this.state.count} />;
    }
  }

export default Counter