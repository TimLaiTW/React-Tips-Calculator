import React, { Component } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
export default class TipsGroup extends Component {
  constructor(props){
    super(props);
    this.state = {
      tips: 15,
    };
  }

  componentDidUpdate(){
    if (this.props.onChange){
      this.props.onChange(this.state.tips)
    }
  }
  render() {
    const tipsPercentages = [15, 18, 20, 22];
    return (
      <ButtonGroup 
        style={{
          borderStyle: "none", 
          marginBottom: "8px"}} 
        size="lg"
        >
        {tipsPercentages.map((tipsPercentage) => (
          <button 
            key={tipsPercentage}
            type="button" 
            className="btn btn-warning" 
            style={{color: "white"}}
            onClick={() => {
              this.setState({ tips: tipsPercentage  })}}>
          {tipsPercentage}%
          </button>
        ))}
      </ButtonGroup>
    )
  }
}

