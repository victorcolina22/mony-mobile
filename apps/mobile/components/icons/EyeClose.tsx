import Svg, { SvgProps, Path } from 'react-native-svg';

export const EyeCloseIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={93}
    height={39}
    fill="none"
    {...props}
  >
    <Path
      fill="#3A3937"
      fillRule="evenodd"
      d="M90.256 1.842c3.267 2.777 3.675 7.689.91 10.97-18.365 21.802-37.36 28.28-54.289 25.628C20.63 35.893 8.162 25.2 1.55 16.347-1.018 12.908-.324 8.03 3.1 5.45a7.727 7.727 0 0 1 10.85 1.557c5.014 6.715 14.245 14.316 25.317 16.051 10.39 1.629 24.332-1.623 40.067-20.3a7.726 7.726 0 0 1 10.922-.915Z"
      clipRule="evenodd"
    />
  </Svg>
);
