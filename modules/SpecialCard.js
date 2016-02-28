import React from 'react';
import classNames from 'classnames/bind';

class SpecialCard extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'SpecialCard';
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
          'animate': !this.state.isPressed && this.state.isHovered
        });
        // forked via http://codepen.io/virgilpana/pen/RNYQwB
        return (
        <div id="canvas-3D">
            <div id="product-card" className={btnClass} onClick={this.click.bind(this)}
                    onMouseEnter={this.hover.bind(this)} onMouseLeave ={this.unhover.bind(this)}>
                <div id="product-front">
                    <div className="image-container">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt.png" alt="" />
                    </div>
                    <div className="image_overlay"></div>
                    <div id="view_details">View details</div>
                    <div className="stats">
                        <div className="stats-container">
                            <span className="product_name">Adidas Originals</span>
                            <p>React.PropTypes includes types that can be used with a component's propTypes object to validate props being passed to your components. For more information about propTypes, see Reusable Components.</p>
                            <div className="product-options">
                                <strong>SIZES</strong>
                                <span>XS, S, M, L, XL, XXL</span>
                                <strong>COLORS</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default SpecialCard;
