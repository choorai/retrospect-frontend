import React from 'react';
import styles from '../../styles/retrospectSettings/GoalSetting.module.css';

const GoalSetting: React.FC = () => {
  return (
    <section className={styles.rootContainer}>
      <div>
        <div>
          <h1 className={styles.title}>회고 목표를 설정해볼까요?</h1>
          <h2 className={styles.subtitle}>목표에 따라 템플릿을 추천해 드려요!</h2>
        </div>

        <div className={styles.inputContainer}>
          <input className={`${styles.inputComponent} ${styles.inputMargin}`} placeholder={'주제'} /><br />
          <input className={`${styles.inputComponent} ${styles.inputMargin}`} placeholder={'상세 목표'} />
        </div>
      </div>
    </section>
  );
};

export default GoalSetting;
