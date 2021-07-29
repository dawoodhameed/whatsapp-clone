import React from "react";
import Test2Component from "./Test2Component";

class TestComponent extends React.Component {

    state = {
        check: "working"
    }

    static getDerivedStateFromProps(props, state) {
        console.log(props);
        console.log(state);
        if (props.testProp == "a") {
            return {
                check: "working perfectly"
            }
        } else return null;
    }
    render() {
        return <Test2Component check={this.state.check} />
    }
}

export default TestComponent;
