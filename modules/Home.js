import React from 'react'
import Cards from './Cards'
import Button from './Button'
import SpecialCard from './SpecialCard'
import classNames from 'classnames/bind'

export default React.createClass({
  render() {
    var options = [ {name:'derp', id:0, body: "I like cheese"},
            {name:"derpine", id:1, body: "I like Niki"},
          ];
    var contents = {title: 'Adidas Originals', body: "React.PropTypes includes types that can be used with a component's propTypes object to validate props being passed to your components."}
    var completed = [];
    var cardClass = classNames('card-container', this.props.className, {
          'pure-u-lg-1-3': true,
          'pure-u-md-1-2': true,
          'pure-u-1 ': true
        });
    for (var i =1; i<10; i++) {
        completed.push(<div className={cardClass} key={'g'+i}>
                        <SpecialCard contents = {contents} key={i} /> </div>)
         }
    return (
        <div>Homer Sim
        <Button label={"Realy Long label"}/>
        <div className="card-group pure-g">
            {completed}
        </div>
        <Cards results={options}/>
        About
        </div>
        )
    }
})