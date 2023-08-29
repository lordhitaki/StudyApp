import * as Styled from './styled';

export interface TitleProps {
  text: string;
  align?: 'center' | 'right' | 'left';
  size?:
    | 'nano'
    | 'xnano'
    | 'xxnano'
    | 'small'
    | 'xsmall'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | 'huge';
  marginTop?:
    | 'nano'
    | 'xnano'
    | 'xxnano'
    | 'small'
    | 'xsmall'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | 'huge';
  marginLeft?:
    | 'nano'
    | 'xnano'
    | 'xxnano'
    | 'small'
    | 'xsmall'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | 'huge';
  marginRight?:
    | 'nano'
    | 'xnano'
    | 'xxnano'
    | 'small'
    | 'xsmall'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | 'huge';
  marginBottom?:
    | 'nano'
    | 'xnano'
    | 'xxnano'
    | 'small'
    | 'xsmall'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | 'huge';
  family?: 'light' | 'regular' | 'bold' | 'extraBold';
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'dark'
    | 'white'
    | 'grayDark'
    | 'title'
    | 'blue'
    | 'pink'
    | 'dimGray';
}

export function Title({text, ...rest}: TitleProps) {
  return <Styled.Title {...rest}>{text}</Styled.Title>;
}
