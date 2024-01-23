import { PureComponent } from "react";
import '../App.css';

class PureCounterComponent extends PureComponent {
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
    };

    render() {
        console.warn("Pure Component")
        return (
            <div className="counter-container">
                <h2>Pure Components</h2>
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

export default PureCounterComponent;
