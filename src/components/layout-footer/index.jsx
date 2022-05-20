import React from 'react';

//styles
import s from './index.module.scss';
import ContentWrapper from "../content-wrapper";

const LayoutFooter = () => {
  return (
    <footer className={s.footer}>
      <ContentWrapper>
        <div className={s.content}>
          <span>Пользовательское соглашение</span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default LayoutFooter;
