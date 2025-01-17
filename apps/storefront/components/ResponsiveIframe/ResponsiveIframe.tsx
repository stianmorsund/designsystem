import React from 'react';
import cn from 'classnames';

import classes from './ResponsiveIframe.module.css';

interface ResponsiveIframeProps {
  aspectRatio: '16-9' | '4-3';
  title: string;
  src: string;
}

const ResponsiveIframe = ({
  aspectRatio = '16-9',
  title,
  src,
  ...rest
}: ResponsiveIframeProps) => {
  return (
    <div
      className={cn(classes.container, {
        [classes.aspectFourThree]: aspectRatio === '4-3',
      })}
    >
      <iframe
        title={title}
        src={src}
        className={classes.iframe}
        {...rest}
      ></iframe>
    </div>
  );
};

export { ResponsiveIframe };
