import React from 'react'
import d3 from 'd3'
import svgPath from '../utils/svg-path'

class Edge extends React.Component {
  constructor(props) {
    super(props);
    const {points} = props;
    this.state = {
      points0: points,
    };
  }

  componentWillReceiveProps() {
    const {points} = this.props;
    this.setState({
      points0: points,
    });
  }

  componentDidMount() {
    this.transition();
  }

  componentDidUpdate() {
    this.transition();
  }

  render() {
    const {points0} = this.state;
    return (
      <g ref="edge">
        <path
          d={svgPath(points0)}
          fill="none"
          opacity="0.3"
          stroke="#000"
          strokeWidth="2"/>
      </g>
    );
  }

  transition() {
    const {points} = this.props;
    d3.select(this.refs.edge)
      .select('path')
      .transition()
      .duration(1000)
      .attr({
        d: svgPath(points),
      });
  }
}

export default Edge