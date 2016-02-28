import React from 'react'
import Cards from './Cards'
import Button from './Button'
import SpecialCard from './SpecialCard'

export default React.createClass({
  render() {
    var options = [ {name:'derp', id:0, body: "I like cheese"},
            {name:"derpine", id:1, body: "I like Niki"},
          ];
    return (
        <div>Homer Sim
        <Button label={"Realy Long label"}/>
        <div className="card-group">
          <SpecialCard/>
          <SpecialCard/>
          <SpecialCard/>
        </div>
        <Cards results={options}/>
        About
        </div>
        )
    }
})