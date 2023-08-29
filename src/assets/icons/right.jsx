import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Right(props) {
  return (
    <Svg
      width={80}
      height={80}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M40 6.666c-18.367 0-33.334 14.967-33.334 33.333 0 18.367 14.967 33.334 33.333 33.334 18.367 0 33.334-14.967 33.334-33.334 0-18.366-14.967-33.333-33.334-33.333zm9.3 35.1L37.532 53.533c-.5.5-1.134.733-1.767.733a2.473 2.473 0 01-1.767-.733 2.515 2.515 0 010-3.534l10-10-10-10a2.515 2.515 0 010-3.533 2.515 2.515 0 013.534 0l11.766 11.767c1 .966 1 2.566 0 3.533z"
        fill="#ED1B24"
        fillOpacity={0.7}
      />
    </Svg>
  );
}

export default Right;
