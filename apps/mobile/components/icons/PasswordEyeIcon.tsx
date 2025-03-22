import Svg, {
  SvgProps,
  Rect,
  Defs,
  Pattern,
  Image,
  Use,
} from 'react-native-svg';

export const PasswordEyeIcon = (props: SvgProps) => (
  <Svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Rect width="18" height="18" fill="url(#pattern0_874_714)" />
    <Defs>
      <Pattern
        id="pattern0_874_714"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <Use xlinkHref="#image0_874_714" transform="scale(0.01)" />
      </Pattern>
      <Image
        id="image0_874_714"
        width="100"
        height="100"
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
);
