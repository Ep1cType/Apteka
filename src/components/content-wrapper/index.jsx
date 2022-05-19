import React from "react";
import cn from 'classnames';

//styles
import s from './index.module.scss';

const ContentWrapper = ({children, className = ''}) => {
  return (
    <div className={cn(s.container, className)}>
      {children}
    </div>
  );
};

export default ContentWrapper;
