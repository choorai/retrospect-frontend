import React, { useState } from 'react';
import styles from '../../../styles/templates/4L.module.css';

interface Item {
  id: string;
  text: string;
}

interface Section {
  id: string;
  title: string;
  description: string;
  items: Item[];
}

const FourLTemplate: React.FC = () => {
  const [sections, setSections] = useState<Section[]>([
    {
      id: 'liked',
      title: 'Liked',
      description: '우리 팀이 좋았던 점, 만족스러웠던 점',
      items: [],
    },
    {
      id: 'learned',
      title: 'Learned',
      description: '우리가 배운 점, 새로 알게된 점',
      items: [],
    },
    {
      id: 'lacked',
      title: 'Lacked',
      description: '아쉬웠던 점, 부족했던 점',
      items: [],
    },
    {
      id: 'longed',
      title: 'Longed for',
      description: '앞으로 바라는 점, 기대하는 점',
      items: [],
    }
  ]);

  const [inputValues, setInputValues] = useState<{ [key: string]: string }>({});

  const handleInputChange = (sectionId: string, value: string) => {
    setInputValues(prev => ({
      ...prev,
      [sectionId]: value
    }));
  };

  const handleKeyPress = (sectionId: string, e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && inputValues[sectionId]?.trim()) {
      setSections(prev => prev.map(section => {
        if (section.id === sectionId) {
          return {
            ...section,
            items: [...section.items, { id: Date.now().toString(), text: inputValues[sectionId].trim() }]
          };
        }
        return section;
      }));
      setInputValues(prev => ({
        ...prev,
        [sectionId]: ''
      }));
    }
  };

  const removeItem = (sectionId: string, itemId: string) => {
    setSections(prev => prev.map(section => {
      if (section.id === sectionId) {
        return {
          ...section,
          items: section.items.filter(item => item.id !== itemId)
        };
      }
      return section;
    }));
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>4L 회고</h1>
        <p className={styles.description}>
          4L 회고는 Liked, Learned, Lacked, Longed for의 관점에서 
          프로젝트나 협업 과정을 돌아보는 회고 방식입니다.
        </p>
      </header>

      <main className={styles.mainContent}>
        <div className={styles.sectionsGrid}>
          {sections.map((section) => (
            <section key={section.id} className={styles.section}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
              <p className={styles.sectionDescription}>{section.description}</p>
              
              <div className={styles.inputWrapper}>
                <input
                  type="text"
                  className={styles.input}
                  placeholder={`${section.title}에 대한 의견을 작성해주세요...`}
                  value={inputValues[section.id] || ''}
                  onChange={(e) => handleInputChange(section.id, e.target.value)}
                  onKeyPress={(e) => handleKeyPress(section.id, e)}
                />
              </div>

              <div className={styles.itemsContainer}>
                {section.items.map(item => (
                  <div key={item.id} className={styles.item}>
                    <span>{item.text}</span>
                    <button 
                      className={styles.removeButton}
                      onClick={() => removeItem(section.id, item.id)}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <button className={styles.saveButton}>저장하기</button>
        <button className={styles.completeButton}>회고 완료</button>
      </footer>
    </div>
  );
};

export default FourLTemplate; 