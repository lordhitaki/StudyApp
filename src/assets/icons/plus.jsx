import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Plus(props) {
  return (
    <Svg
      width={61}
      height={61}
      viewBox="0 0 61 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33 2.5a2.5 2.5 0 00-5 0v24.9H2.5a2.5 2.5 0 000 5H28v26.1a2.5 2.5 0 005 0V32.4h25.5a2.5 2.5 0 000-5H33V2.5z"
        fill="#fff"
        fillOpacity={0.3}
      />
    </Svg>
  );
}

export default Plus;
