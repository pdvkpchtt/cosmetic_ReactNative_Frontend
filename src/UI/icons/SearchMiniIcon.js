import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg";

function SearchMiniIcon(props) {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path fill="url(#pattern0_12_48)" d="M0 0H25V25H0z" />
      <Defs>
        <Pattern
          id="pattern0_12_48"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_12_48" transform="scale(.01042)" />
        </Pattern>
        <Image
          id="image0_12_48"
          width={96}
          height={96}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  );
}

export default SearchMiniIcon;
