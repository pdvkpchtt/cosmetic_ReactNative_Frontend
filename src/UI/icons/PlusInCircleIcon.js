import Svg, { Circle, Path } from "react-native-svg";

function PlusInCircleIcon(props) {
  return (
    <Svg
      width={29}
      height={29}
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={14.5} cy={14.5} r={14.5} fill="#F3EFEF" />
      <Path
        d="M13.568 21.28V8.243h1.761V21.28h-1.76zm-5.643-5.643v-1.751h13.048v1.75H7.925z"
        fill="#AAA"
      />
    </Svg>
  );
}

export default PlusInCircleIcon;
