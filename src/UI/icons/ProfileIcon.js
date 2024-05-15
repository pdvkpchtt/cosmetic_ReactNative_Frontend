import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg";

function ProfileIcon(props) {
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
      <Path fill="url(#pattern0_12_9)" d="M0 0H28V28H0z" />
      <Defs>
        <Pattern
          id="pattern0_12_9"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_12_9" transform="scale(.01042)" />
        </Pattern>
        <Image
          id="image0_12_9"
          width={96}
          height={96}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  );
}

export default ProfileIcon;
