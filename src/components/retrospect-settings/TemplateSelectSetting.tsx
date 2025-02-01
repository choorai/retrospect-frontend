import React from 'react';
import styles from '../../styles/retrospectSettings/TemplateSelectSetting.module.css';

interface Template {
  id: number;
  name: string;
  description: string;
  enable: boolean;
}

const TemplateSelectSetting: React.FC = () => {
  const templates: Template[] = [
    {
      id: 1,
      name: '4L 회고',
      description: 'Liked, Learned, Lacked, Longed for 방식으로 진행하는 회고',
      enable: true,
    },
    {
      id: 2,
      name: '(준비중) KPT 회고',
      description: 'Keep, Problem, Try 방식으로 진행하는 회고',
      enable: false,
    },
    {
      id: 3,
      name: '(준비중) 5F 회고',
      description: 'Fact, Feeling, Finding, Future action, Feedback 방식으로 진행하는 회고',
      enable: false,
    },
  ];

  return (
    <section className={styles.rootContainer}>
      <div>
        <div>
          <h1 className={styles.title}>회고 템플릿을 선택해주세요!</h1>
          <h2 className={styles.subtitle}>자세한 설명 보기를 클릭하면 템플릿 선택에 도움이 돼요.</h2>
        </div>

        <div className={styles.templateContainer}>
          {templates.map((template) => (
            <div 
              key={template.id}
              className={`${styles.template} ${!template.enable ? styles.disabled : ''}`}
              onClick={template.enable ? undefined : (e) => e.preventDefault()}
            >
              <span lang={"en"} className={styles.templateTitle}>{template.name}</span>
              <span className={styles.templateDescription}>{template.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TemplateSelectSetting;
