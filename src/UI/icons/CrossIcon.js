import * as React from "react";
import Svg, { Path } from "react-native-svg";

function CrossIcon(props) {
  return (
    <Svg
      width={10}
      height={10}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        transform="matrix(.69429 -.7197 .69429 .7197 0 .625)"
        fill="#D9D9D9"
        d="M0 0H0.868415V13.0262H0z"
      />
      <Path
        transform="matrix(.69429 .7197 -.69429 .7197 9.397 0)"
        fill="#D9D9D9"
        d="M0 0H0.868415V13.0262H0z"
      />
    </Svg>
  );
}

export default CrossIcon;
