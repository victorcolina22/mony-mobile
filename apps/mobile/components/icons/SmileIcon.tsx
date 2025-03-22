import Svg, { SvgProps, Path } from 'react-native-svg';

export const SmileIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={337}
    height={88}
    fill="none"
    {...props}
  >
    <Path
      fill="#3A3937"
      fillRule="evenodd"
      d="M333.701 1.573c3.609 2.64 4.375 7.68 1.712 11.256-22.466 30.169-75.298 63.282-137.274 72.6C135.557 94.838 63.021 80.08 2.103 13.454a8 8 0 0 1 .564-11.369c3.324-2.985 8.46-2.734 11.47.56 56.83 62.154 123.695 75.569 181.567 66.868 58.477-8.792 107.151-40.07 126.642-66.243 2.663-3.577 7.747-4.336 11.355-1.697Z"
      clipRule="evenodd"
    />
  </Svg>
);
