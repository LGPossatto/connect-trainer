import Svg, { Path } from "react-native-svg";

const LeftArrow = (props: any) => (
  <Svg
    width={10}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M.333 8c0-.342.13-.683.39-.943L7.392.39a1.333 1.333 0 1 1 1.885 1.885L3.55 7.999l5.725 5.725A1.333 1.333 0 1 1 7.39 15.61L.723 8.943A1.33 1.33 0 0 1 .333 8Z"
      fill="#FAFAFA"
    />
  </Svg>
);

export default LeftArrow;
