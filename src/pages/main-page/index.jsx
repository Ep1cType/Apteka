import React from "react";

//styles
import s from './index.module.scss';
import ContentWrapper from "../../components/content-wrapper";

const MainPage = () => {
  return (
    <ContentWrapper>
      <div className={s.test}>
        Hello world !
      </div>
    </ContentWrapper>
  );
};

export default MainPage;
