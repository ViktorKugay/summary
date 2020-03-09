import React from 'react';
import cn from 'classnames';
import noop from '../../../utils/noop';

import s from './Text.css';

interface Props {
  mod?: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
  color?: 'white' | 'black' | 'main';
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p';
  align?: 'center' | 'left' | 'right';
  display?: 'block' | 'inline-block' | 'inline';
  fontFamily?: 'montserrat' | 'roboto';
  weight?: '200' | '300' | '400' | '500' | '600' | '700' | '800';
  whiteSpace?: 'noWrap' | 'preWrap';
  isUppercase?: boolean;
  onClick?(event: any): any;
  className?: string;
}

export const Text: React.FC<Props> = ({
  children,
  tag = 'p',
  className,
  mod = 'p',
  align = 'left',
  color = 'black',
  display = 'block',
  fontFamily = 'montserrat',
  weight = '200',
  whiteSpace = 'preWrap',
  isUppercase = false,
  onClick = noop,
}) => {
  const Tag = tag;
  const classNames = cn(
    {
      [s[`mod_${mod}`]]: mod,
      [s[`align_${align}`]]: align,
      [s[`color_${color}`]]: color,
      [s[`display_${display}`]]: display,
      [s[`fontFamily_${fontFamily}`]]: fontFamily,
      [s[`weight_${weight}`]]: weight,
      [s[`whiteSpace_${whiteSpace}`]]: whiteSpace,
      [s.isUppercase]: isUppercase,
    },
    className,
  );

  return (
    <Tag className={classNames} onClick={onClick}>
      {children}
    </Tag>
  );
};
