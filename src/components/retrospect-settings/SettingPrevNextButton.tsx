import React from 'react';
import styles from '../../styles/retrospectSettings/SettingPrevNextButton.module.css';

const FIRST_SLIDE_IDX: number = 1;
const LAST_SLIDE_IDX: number = 3;

interface SlideProps {
  prevFn: () => void,
  nextFn: () => void,
  slideIdx: number,
}

const SettingPrevNextButton = ({ prevFn, nextFn, slideIdx }: SlideProps) => {
  const isFadeOutBtn = (targetIdx: number) => {
    return slideIdx === targetIdx ? styles.fadeOutBtn : styles.fadeInBtn;
  };

  return (
    <section className={styles.rootContainer}>
      <button className={`${styles.prevBtn} ${isFadeOutBtn(FIRST_SLIDE_IDX)}`} onClick={prevFn}>
        이전
      </button>

      <button className={`${styles.nextBtn} ${isFadeOutBtn(LAST_SLIDE_IDX)}`} onClick={nextFn}>
        다음
      </button>
    </section>
  );
};

export default SettingPrevNextButton;
