import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg";

function SettingsIcon(props) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path fill="url(#pattern0_8_274)" d="M0 0H28V28H0z" />
      <Defs>
        <Pattern
          id="pattern0_8_274"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_8_274" transform="scale(.01042)" />
        </Pattern>
        <Image
          id="image0_8_274"
          width={96}
          height={96}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  );
}

export default SettingsIcon;
