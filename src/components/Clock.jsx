import { Component } from 'react';

class Clock extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         date: new Date()
    //     };
    // }

    state = {
        date: new Date()
    };

    componentDidMount() {
        this.clockTimer = setInterval(() => { this.tick(); }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    handleClick(e) {
        e.preventDefault();
        console.log('Button was clicked!');
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        const { date } = this.state;
        return (
            <div>
                <h1 className="heading">
                    <span>Clock: </span>
                    <span className="text">{date.toLocaleTimeString(this.props.local)}</span>
                </h1>
                <a href="/" onClick={this.handleClick}>Click Me</a>
            </div>
        );
    }

}

export default Clock;
