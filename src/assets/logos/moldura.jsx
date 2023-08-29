import * as React from 'react';
import Svg, {Circle} from 'react-native-svg';

function Moldura(props) {
  return (
    <Svg
      width={70}
      height={70}
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle
        cx={34.9997}
        cy={34.9999}
        r={28.0192}
        stroke="#ED1B24"
        strokeWidth={0.5}
      />
      <Circle
        cx={35.0002}
        cy={35}
        r={29.3654}
        stroke="#ED1B24"
        strokeOpacity={0.8}
        strokeWidth={0.5}
      />
      <Circle
        cx={34.9996}
        cy={35}
        r={30.7115}
        stroke="#ED1B24"
        strokeOpacity={0.6}
        strokeWidth={0.5}
      />
      <Circle
        cx={35.0001}
        cy={35}
        r={32.0577}
        stroke="#ED1B24"
        strokeOpacity={0.4}
        strokeWidth={0.5}
      />
      <Circle
        cx={34.9995}
        cy={35}
        r={33.4038}
        stroke="#ED1B24"
        strokeOpacity={0.2}
        strokeWidth={0.5}
      />
      <Circle
        cx={35}
        cy={35}
        r={34.75}
        stroke="#ED1B24"
        strokeOpacity={0.1}
        strokeWidth={0.5}
      />
    </Svg>
  );
}

export default Moldura;
