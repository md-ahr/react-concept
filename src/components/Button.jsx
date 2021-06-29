import { Component } from 'react'

class Button extends Component {
    shouldComponentUpdate(nextProps) {
        const { change: currentChange, local: currentLocal } = this.props;
        const { change: nextChange, local: nextLocal } = nextProps;
        if (currentChange === nextChange && currentLocal === nextLocal) {
            return false;
        }
        return true;
    }
    render() {
        const { change, local } = this.props;
        return (
            <a href="/" onClick={(e) => change(e, local)}>
                {local === 'en-US' ? 'ঘড়ি পরিবর্তন করুন' : 'Change Clock'}
            </a>
        );
    }
}

export default Button;
