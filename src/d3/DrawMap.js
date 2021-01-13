import React, { useState, useEffect } from "react";
import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import MapData from "../IN.json";
var lattop = 51.6;
var lonleft = 2.4;
var lonright = 7.7;
var width = 500;
var height = 600;

// make the scale so that the difference of longitude is
// exactly the width of the image
var scale = (360 * width) / (lonright - lonleft);
const projection = geoMercator().scale(6600).translate([10175, 5310]);

const DrawMap = () => {
  const [geographies, setGeographies] = useState([]);

  useEffect(() => {
    setGeographies(feature(MapData, MapData.objects.countries).features);
  }, []);

  //   useEffect(() => {
  //     geographies.map((d, i) => {
  //       console.log(d);
  //       console.log(i);
  //     });
  //   }, [geographies]);

  return (
    <div className="container mt-2 text-center" style={{ maxWidth: "75%" }}>
      <h1>Indiana Counties</h1>
      <svg height={height} width={width}>
        <g className="countries">
          {geographies.map((d, i) => (
            <path
              key={`path-${i}`}
              d={geoPath().projection(projection)(d)}
              className="country"
              fill={`rgba(38,50,56,0.9)`}
              stroke="#FFFFFF"
              strokeWidth={0.5}
            />
          ))}
        </g>
      </svg>
    </div>
  );
};
export default DrawMap;
