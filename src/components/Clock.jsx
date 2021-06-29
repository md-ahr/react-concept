import { Component } from 'react';
import Button from './Button'

class Clock extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         date: new Date(),
    //         local: 'en-US'
    //     };
    //     this.handleClick = this.handleClick.bind(this);
    // }

    state = {
        date: new Date(),
        local: 'en-US'
    };

    componentDidMount() {
        this.clockTimer = setInterval(() => { this.tick(); }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    handleClick = (e, local) => {
        e.preventDefault();
        this.setState({
            local
        });
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        const { date, local } = this.state;
        // let button;
        // if (local === 'en-US') {
        //     button = <Button change={this.handleClick} local="bn-BD" />
        // } else {
        //     button = <Button change={this.handleClick} local="en-US" />
        // }
        return (
            <div>
                <h1 className="heading">
                    <span>Clock: </span>
                    {/* <span className="text">{date.toLocaleTimeString(this.props.local)}</span> */}
                    <span className="text">{date.toLocaleTimeString(local)}</span>
                </h1>
                {local === 'en-US' ? (
                    <Button change={this.handleClick} local="bn-BD" />
                ) : (
                    <Button change={this.handleClick} local="en-US" />
                )}
                {/* {button} */}
            </div>
        );
    }

}

export default Clock;
