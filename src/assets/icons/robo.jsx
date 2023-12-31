import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Robo(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      viewBox="0 0 640 512"
      {...props}>
      <Path d="M32 224h32v192H32a31.962 31.962 0 01-32-32V256a31.962 31.962 0 0132-32zm512-48v272a64.063 64.063 0 01-64 64H160a64.063 64.063 0 01-64-64V176a79.974 79.974 0 0180-80h112V32a32 32 0 0164 0v64h112a79.974 79.974 0 0180 80zm-280 80a40 40 0 10-40 40 39.997 39.997 0 0040-40zm-8 128h-64v32h64zm96 0h-64v32h64zm104-128a40 40 0 10-40 40 39.997 39.997 0 0040-40zm-8 128h-64v32h64zm192-128v128a31.962 31.962 0 01-32 32h-32V224h32a31.962 31.962 0 0132 32z" />
    </Svg>
  );
}

export default Robo;
