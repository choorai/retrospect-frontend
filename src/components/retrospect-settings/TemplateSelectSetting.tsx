import React from 'react';
import styles from '../../styles/retrospectSettings/TemplateSelectSetting.module.css';

const TemplateSelectSetting: React.FC = () => {
  return (
    <section className={styles.rootContainer}>
      <div>
        <div>
          <h1 className={styles.title}>회고 템플릿을 선택해주세요!</h1>
          <h2 className={styles.subtitle}>자세한 설명 보기를 클릭하면 템플릿 선택에 도움이 돼요.</h2>
        </div>

        <div className={styles.templateContainer}>
          <div className={styles.template}>
            <span lang={"en"} className={styles.templateTitle}>KPT</span>
            <span className={styles.templateDescription}>한 줄 설명 뭐시기</span>
          </div>
          <div className={styles.template}>
            <span lang={"en"} className={styles.templateTitle}>KPT</span>
            <span className={styles.templateDescription}>한 줄 설명 뭐시기</span>
          </div>
          <div className={styles.template}>
            <span lang={"en"} className={styles.templateTitle}>KPT</span>
            <span className={styles.templateDescription}>한 줄 설명 뭐시기</span>
          </div>
          <div className={styles.template}>
            <span lang={"en"} className={styles.templateTitle}>KPT</span>
            <span className={styles.templateDescription}>한 줄 설명 뭐시기</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemplateSelectSetting;
