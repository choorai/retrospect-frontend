import React from 'react';
import styles from './MainSection.module.css';
import { useNavigate } from 'react-router-dom';

const MainSection: React.FC = () => {
  const navigate = useNavigate();

  const startBtnClick = () => {
    navigate('/retrospect-settings');
  };

  return (
    <section className={styles.mainSection}>
      <div className={styles.leftMainSection}>
        <div>
          <h1 className={styles.title} lang={lang.en}>ReHub(Retrospect Hub)</h1>
          <h2 className={styles.subtitle}>당신이 원하는 회고 서비스</h2>
        </div>
        <div className={styles.startBtnWrapper}>
          <button onClick={startBtnClick} className={styles.startBtn}>시작하기</button>
        </div>
      </div>

      <div>
        {/*<img*/}
        {/*  className={styles.mainImage}*/}
        {/*  src={`${process.env.PUBLIC_URL}/images/meeting_img.jpg`}*/}
        {/*  alt="Illustration of people discussing"*/}
        {/*/>*/}
      </div>
    </section>
  );
};

const lang = {
  ko: 'ko',
  en: 'en',
};

export default MainSection;
