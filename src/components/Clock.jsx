import React from 'react';

class Clock extends React.Component {
    render() {
        return (
            <h1 className="heading">
                <span className="text">{new Date().toLocaleTimeString(this.props.local)}</span>
            </h1>
        );
    }
}

export default Clock;
