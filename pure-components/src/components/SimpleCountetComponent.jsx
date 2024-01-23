import { Component } from "react";
import '../App.css';

class SimpleCounterComponent extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            toggle: false
        };
    }

    handleToggle = () => {
        this.setState((prevState) => ({
            toggle: !prevState.toggle
        }));
    };

    handleIncrement = () => {
        if (this.state.toggle) {
            this.setState((prevState) => ({
                count: prevState.count + 1
            }));
        }
        else{
            this.setState({count : this.state.count})
        }
    };

    render() {
        console.warn("Simple Component")
        return (
            <div className="counter-container">
                <h2>Simple Components</h2>
                <h1>{this.state.count}</h1>
                <button
                    onClick={this.handleToggle}
                    style={{ backgroundColor: this.state.toggle ? 'green' : 'red' }}
                >
                    Toggle
                </button>
                <button onClick={this.handleIncrement}>Increment</button>
            </div>
        );
    }
}

export default SimpleCounterComponent;
