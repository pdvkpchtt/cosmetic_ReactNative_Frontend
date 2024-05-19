import * as React from "react";
import Svg, { Path } from "react-native-svg";

function CrossIcon2(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        transform="matrix(.69429 -.7197 .69429 .7197 0 1.25)"
        fill="#AAA"
        d="M0 0H1.73683V26.0525H0z"
      />
      <Path
        transform="scale(.98187 1.0178) rotate(45 9.57 23.106)"
        fill="#AAA"
        d="M0 0H1.73683V26.0525H0z"
      />
    </Svg>
  );
}

export default CrossIcon2;
