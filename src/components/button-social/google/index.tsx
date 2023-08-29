/* eslint-disable no-console */
import React, {useState} from 'react';

import IconGoogle from '../../../assets/icons/google';

import ButtonSocial, {ButtonSocialProps} from '..';

export default function ButtonSocialGoogle({
  onPress,
  ...rest
}: Omit<ButtonSocialProps, 'children'>) {
  const [load, setLoad] = useState(false);

  return (
    <ButtonSocial {...rest} onPress={onPress} load={load}>
      <IconGoogle />
    </ButtonSocial>
  );
}
