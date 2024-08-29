import React from 'react';
import styles from '../../styles/retrospectSettings/SlideStatusBar.module.css';

// const FIRST_SLIDE_IDX: number = 1;
const LAST_SLIDE_IDX: number = 3;
const PROGRESS_BAR_WIDTH = new Map([
  [1, '33%'],
  [2, '66%'],
  [3, '100%'],
]);

interface SlideProps {
  slideIdx: number,
}

const SlideStatusBar = ({ slideIdx }: SlideProps) => {
  console.log(slideIdx);

  return (
    <section className={styles.rootContainer}>
      <div className={styles.progressBarWrapper}>
        <div className={styles.progressBar}
             style={{ width: `${PROGRESS_BAR_WIDTH.get(slideIdx)}` }}
        ></div>
      </div>

      <span className={styles.progressText}>
        {`${slideIdx}/${LAST_SLIDE_IDX}`}
      </span>
    </section>
  );
};

export default SlideStatusBar;
