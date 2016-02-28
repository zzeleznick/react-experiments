import React from 'react';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Card';
    }
    render() {
        var content = this.props.content;
        return (
            <div className="card">
                <h3>{content.name}</h3>
                <p>{content.body}</p>
            </div>
        );
    }
}

export default Card;
