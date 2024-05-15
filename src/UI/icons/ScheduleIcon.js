import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg";

function ScheduleIcon(props) {
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
      <Path fill="url(#pattern0_12_110)" d="M0 0H28V28H0z" />
      <Defs>
        <Pattern
          id="pattern0_12_110"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_12_110" transform="scale(.01042)" />
        </Pattern>
        <Image
          id="image0_12_110"
          width={96}
          height={96}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADYUlEQVR4nO2dz24TMRDGXcGtKeUd+HMAiRZeAxAPU4pU2htC4lAV8QqJYHc+V2okBLREEJ6ihSegHKG9VkYWywXVmzRLduz195Pmanvms2e9mWjWGEIIIYQQQgghhBBCZqQoipsAngAYicgRgFMALlE7rXwYAVjf3d29Ee3GsNbeFpG3EQTNzdlGZVneM7EwHo8vA3gF4CyC4LiW7ExEXnrfVYO/t7d3tTqeLkcTkQMAyyrBB3BJRN5rBwH69lHlJFRpR9t5F4nttBp8/xCakPO/A9goy3Kl3+8vmkTp9/uL3gcReQrguMZfH4vV1hY2Ie+/STnoIQD0RKSo8XvftHjPDy3itXNuwXQU59zCBBGuz30R1UtWKO30TMcB0AulIxF5rJl+NkwmANgMCHDQxuTfzpvcWnvHZEJZliuBTfh17pMDOAlM3vn0808aOi8GJ2behB5AJjOgFQcK8AcKoEx0AtBAARDBRuAJAAVQ34XgCdAPBJiC9IOBnJ4BJjNAAXShAMpQAGUogDIUQBkKoAwFUCZZAay1jwB8qf41fSoi47IsH15kDTGMkaQAAF7UvEU+T2yMtASodlzta7y19kEKYzSJQ2Nmnbg67pN+S/mcwhhN4qApQOjfFO6vicivFMZoEoeoBQDwM4UxmsShMbNO7G8ZUzj+KYUxmsShMbNO7K94Uzh+P4UxmsShMU0m9le8mrz7LLEx0hPA4694/pZR5eITf9yn2XGxjZGsAF0BFEAXCqAMBVCGAihDAZShAMpQAGWSFSCGala2AsRSzcpSgJiqWVkKEFM1K1cBoqlm/Q86KQBaqmZlKUBM1awsBYipmpWlADFVs7IVIJZqVtYCdAVoxcFf83JvVzMYDK6o3cDYsMn4GKwGnkFHai3LfGtHkwkAtjRblq0Hjt9xDmloOBwuiciPQAzW5r4A38K95hpYdL1tJYAy5H9RFNdaWUjVtDooQhdPwnA4XKoLPoAPbT+E6loX+3S0aa29m7IYAHqVD1s1acfbWetdI33//JoFZWUism002tcDeKftPHJtX1+JsFz3PMjA9v1LmYngEyY7GX7CZNtnARMLAG6JCCIIjpuzjVr9VsBF8S3cfRfxKjUdTlnFcpGaX/th5ctaa/d8QgghhBBCCCGEEGK6yG85fP6QyVNpJgAAAABJRU5ErkJggg=="
        />
      </Defs>
    </Svg>
  );
}

export default ScheduleIcon;
