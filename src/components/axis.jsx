// import React from "react";
// import * as d3 from "d3";

// export default class Axis extends React.Component {
//   componentDidMount() {
//     this.renderAxis();
//   }

//   componentDidUpdate() {
//     this.renderAxis();
//   }

//   renderAxis() {
//     var node = this.refs.axis;
//     if (this.props.orient == "left") {
//       var yAxis = d3.axisLeft().scale(this.props.scale);
//       d3.select(node).call(yAxis);
//     } else {
//       var xAxis = d3.axisBottom().scale(this.props.scale);
//       d3.select(node).call(xAxis);
//     }
//   }

//   render() {
//     return <g className="axis" ref="axis" transform={this.props.translate}></g>;
//   }
// }
