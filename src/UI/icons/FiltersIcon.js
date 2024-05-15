import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg";

function FiltersIcon(props) {
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
      <Path fill="url(#pattern0_12_50)" fillOpacity={0.95} d="M0 0H25V25H0z" />
      <Defs>
        <Pattern
          id="pattern0_12_50"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_12_50" transform="scale(.01042)" />
        </Pattern>
        <Image
          id="image0_12_50"
          width={96}
          height={96}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAC70lEQVR4nO2cy2oUQRSGBxcBLxsV3OgrCFkYRNAHMC58D/UdshWjgjdiXA4MVH1F92IWkifRJ/CKN4gK8cJIQQtRaSbj9PQ53fN/8MPQ6ZquOjVd1V315wwGQgghhBBCCCGEEEL0lKIozgA3gJ0Y43Pgc1b1eSf/LZ9jXc/eAZwA7sUYvwOTKfoJDIuiOGVd714QQlgD3h4g8H8oxvgml7Wuf6dJKV0CdmcN/j7lshet29FJyrI8CbyaI/i/74SXeQizbk/nAO7OG/x9nXDbuj2dAlgB3tcEdA+4BZwdj8dHsvLn6theTQe8y99p3a7OkFK6WhP8Hymly3XlQgjr1VPQP2Xzd7bbisFgkH8dMcZHwKembmdjbU1rM7A953D1EXgIHJ67A2KMjx0EbdKUUkrnD9ABF5q4Vo7dXMHf2Ng4BHy1DhoNajgcHp3W7nxOQx3wJcdQHcBsHQAcc9EBGQ1BLHS+mUqeSIAH1cRiPoTQwrgMPJnzOh9ijPcbmYT7+BgaQlivKwdccfUY2uMXsU1gNc8J1aS7Wh37VnPn6EVsVoA7DQ5fmzNXYNkpG1qMA16MRqPj1u3pJEnL0faEENby5sp//PJfp5TOWde/T1uSN+tWO/+acPO25ba2JBcAcDrGeD3G+LTaiN+t9CwfA67lcxZxbSGEWFZkiDJChihDZIgyRG+ghsgQZYwMUYbIEGVMbwxRXmjQmLVwQxRO5NKY1aYhCidyZcxq0xCFE7kyZrVpiMKJXBmzlnEIwpMxqyVD1MSJ7IxZMkQZI0OUA2SIMkaGKAdoOdoBMkQ5QIYoJ8gQJYQQom0KZciyAWXIsiMoQ5YdSf+SZEepDFm2oAxZpsFfUYYsQ1JfDWE9yJi11bYhzKUxy0rJ0I3hyphlpaGhIcyVMctzB7AgQ5grY5aVkq0hzI8xy0rRxhC2fBmzkjJk2YIyZNmDMmTZUipDlj1Jy9H2BGXIsgdlyPIBypAlhBBCCCGEEEIIIQY++AUZYQPZQjYImwAAAABJRU5ErkJggg=="
        />
      </Defs>
    </Svg>
  );
}

export default FiltersIcon;
