import React, {useMemo} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

//styles
import s from './index.module.scss';
import ContentWrapper from "../../components/content-wrapper";

import KoraBack from "../../images/kora.png";
import TolerBack from "../../images/toler.png";
import FaceBack from "../../images/face.png";

const MainPage = () => {
  const sales = useMemo(
    () => [
      {
        id: 1,
        title: "Акция",
        subtitle: "Косметическая линейка Kora со скидкой 20%",
        image: KoraBack,
      },
      {
        id: 2,
        title: "Скидка!",
        subtitle: "Скидка 15% на гамму Toleriane La Roche-Posay для ухода за чувствительной кожей",
        image: TolerBack,
      },
      {
        id: 3,
        title: "С заботой о себе",
        subtitle: "Аксессуары для вашей красоты",
        image: FaceBack,
      },
    ],
    []
  );


  return (
    <ContentWrapper>
      <section className={s.test}>
        <Carousel swipeable autoPlay className={s.carousel}>
          {sales.map((el) => {
            return (
              <div style={{backgroundImage: `url(${el.image})`}} className={s.select}>
                <div className={s.select__title}>{el.title}</div>
                <div className={s.select__subtitle}>{el.subtitle}</div>
              </div>
            )
          })}
        </Carousel>
      </section>
    </ContentWrapper>
  );
};

export default MainPage;
