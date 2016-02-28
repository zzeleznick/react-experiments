import React from 'react';
import Card from './Card';

class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Cards';
    }
    render() {
        var derps = this.props.results;
        console.log("yo")
        return (
          <ol>
            {derps.map(function(result) {
              console.log({result});
              if (!result.id || !result.name) {
                console.log("Missing values");
              }
              return <Card key={result.id} content = {result}/>;
            })}
          </ol>
        );
    }
}

export default Cards;
