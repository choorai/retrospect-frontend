import React from 'react';
import styles from '../../styles/templateSelection/TemplateSelection.module.css';
import { useNavigate } from 'react-router-dom';

const TemplateSelection: React.FC = () => {
  const navigate = useNavigate();

  const templates = [
    {
      id: 1,
      name: '4L 회고',
      description: 'Liked, Learned, Lacked, Longed for 방식으로 진행하는 회고',
      enable: true,
      type: '4L'
    },
    {
      id: 2,
      name: '(준비중) KPT 회고',
      description: 'Keep, Problem, Try 방식으로 진행하는 회고',
      enable: false,
      type: 'KPT',
    },
    {
      id: 3,
      name: '(준비중) 5F 회고',
      description: 'Fact, Feeling, Finding, Future action, Feedback 방식으로 진행하는 회고',
      enable: false,
      type: '5F',
    },
  ];

  const selectTemplate = (templateId: number, templateType: string, templateName: string) => {
    navigate('/room/create', {
      state: {
        templateId,
        templateType,
        templateName
      }
    });
  };

  return (
    <section className={styles.templateSection}>
      <h1 className={styles.title}>회고 템플릿 선택</h1>
      <p className={styles.subtitle}>원하시는 회고 템플릿을 선택해주세요</p>
      
      <div className={styles.templateGrid}>
        {templates.map((template) => (
          <div 
            key={template.id}
            className={`${styles.templateCard} ${!template.enable ? styles.disabled : ''}`}
            onClick={() => template.enable ? selectTemplate(template.id, template.type, template.name) : null}
          >
            <h2>{template.name}</h2>
            <p>{template.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TemplateSelection; 