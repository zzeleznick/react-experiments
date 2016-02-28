import React from 'react';
import classNames from 'classnames/bind';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Button';
        this.state = {isPressed: false, isHovered: false};
    }

    hover() {
        this.setState({isHovered: true});
    }
    unhover() {
        this.setState({isHovered: false});
    }
    click(){
        console.log(this.state);
        console.log('Clicked');
    }

    render() {
        var btnClass = classNames('btn', this.props.className, {
          'btn-pressed': this.state.isPressed,
          'btn-over': !this.state.isPressed && this.state.isHovered
        });
        return (<div className={btnClass} onClick={this.click.bind(this)}
                onMouseEnter={this.hover.bind(this)} onMouseLeave ={this.unhover.bind(this)} >
                {this.props.label} derp </div>);
    }
}

export default Button;
