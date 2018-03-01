import React, { Component } from 'react';

class Rad extends Component {
    constructor() {
        super();
        this.state = {
            selectedOption: ''
        };
        const values = this.props;
    }
    render() {
        return (
            <div>
                <form>
                    <input
                        type='radio'
                        value={this.props.values[0]}
                        checked={
                            this.state.selectedOption === this.props.values[0]
                        }
                        onClick={this.handleClick.bind(this)}
                    />
                    {this.props.values[0]}
                    <input
                        type='radio'
                        value={this.props.values[1]}
                        checked={
                            this.state.selectedOption === this.props.values[1]
                        }
                        onClick={this.handleClick.bind(this)}
                    />
                    {this.props.values[1]}
                </form>
            </div>
        );
    }
    handleClick(e) {
        this.setState({ selectedOption: e.target.value });
    }
}

export default Rad;
