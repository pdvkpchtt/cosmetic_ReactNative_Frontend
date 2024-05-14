import Svg, { Path, Defs, Pattern, Use, Image, Circle } from "react-native-svg";

function AvatarIcon() {
  return (
    <Svg
      width={95}
      height={95}
      viewBox="0 0 95 95"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <Path fill="url(#pattern0_8_3)" d="M0 0H95V95H0z" />
      <Defs>
        <Pattern
          id="pattern0_8_3"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_8_3" transform="scale(.01)" />
        </Pattern>
        <Image
          id="image0_8_3"
          width={100}
          height={100}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  );
}

export default AvatarIcon;
