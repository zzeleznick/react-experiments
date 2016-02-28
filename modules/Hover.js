import React from 'react';
import HoverMixin from 'react-hover-mixin';

export default React.createClass({
  mixins: [HoverMixin],
  render: function(){
    return React.createElement("div", null,

      React.createElement("b", {
          onMouseEnter: this.hoverable_onMouseEnter,
          onMouseLeave: this.hoverable_onMouseLeave,
        },
        "[hover over me]"
      ),
      this.state.hover ? "I'm being hovered over!" : null
    );
    /*
    return <div onMouseEnter= { this.hoverable_onMouseEnter} onMouseLeave ={this.hoverable_onMouseLeave} >
          <b>[hover over me]</b></div>
    */
  }
});
