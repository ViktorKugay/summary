import React, {useRef} from 'react';
import cn from 'classnames';
import {Text} from '../../ui/Text/Text';
import anime from 'animejs/lib/anime.es.js';

import s from './PostCard.css';

interface Props {
  className?: string;
  title: string;
  description?: string;
  image?: any;
  margin?: 'normal' | 'dense';
  mod?: 'large' | 'middle' | 'small';
}

export const PostCard: React.FC<Props> = ({
  className,
  title,
  image,
  margin = 'normal',
  description,
  mod = 'middle',
}) => {
  const classNames = cn(s.root, s[`mod_${mod}`], s[`margin_${margin}`], className);

  const isLargeMod = mod === 'large';

  const container = useRef();

  const handleOver = () => {
    anime({
      targets: container.current,
      scale: 1.03,
      duration: 3000,
    });
  };

  const handleDown = () => {
    anime({
      targets: container.current,
      scale: 1,
      duration: 3000,
    });
  };

  return (
    <div ref={container} className={classNames} onMouseEnter={handleOver} onMouseLeave={handleDown} id="titles">
      {image && <img className={s.image} src={image} alt="alt" />}
      <div className={cn(s[`text_container_${mod}`])}>
        <Text mod="h2" margin="normal" align="justify">
          {title}
        </Text>
        {isLargeMod && (
          <Text mod="h4" align="justify">
            {description}
          </Text>
        )}
      </div>
    </div>
  );
};
