import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg";

function BookmarkIcon(props) {
  return (
    <Svg
      width={29}
      height={29}
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path fill="url(#pattern0_12_11)" d="M0 0H29V29H0z" />
      <Defs>
        <Pattern
          id="pattern0_12_11"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_12_11" transform="scale(.01042)" />
        </Pattern>
        <Image
          id="image0_12_11"
          width={96}
          height={96}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  );
}

export default BookmarkIcon;
