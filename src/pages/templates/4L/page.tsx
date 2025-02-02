import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from '../../../styles/templates/4L.module.css';
import Cookies from 'js-cookie';

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

interface RoomInfo {
  code: string;
  name: string;
  templateType: string;
  templateName: string;
  createdAt: string;
}

const COOKIE_KEY = '4L_RETROSPECT_DRAFT';

const FourLTemplate: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const roomCode = new URLSearchParams(location.search).get('room');
  const [roomInfo, setRoomInfo] = useState<RoomInfo | null>(null);

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

  // 페이지 로드 시 저장된 데이터 불러오기
  useEffect(() => {
    const savedData = Cookies.get(COOKIE_KEY);
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setSections(parsedData);
      } catch (error) {
        console.error('저장된 데이터 파싱 중 오류 발생:', error);
      }
    }
  }, []);

  // room 파라미터 체크
  useEffect(() => {
    if (!roomCode) {
      navigate('/');
      return;
    }

    // 방 정보 로드
    const savedRoomInfo = localStorage.getItem(`room_${roomCode}`);
    if (!savedRoomInfo) {
      navigate('/');
      return;
    }

    setRoomInfo(JSON.parse(savedRoomInfo));
  }, [roomCode, navigate]);

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

  const handleSave = () => {
    try {
      Cookies.set(COOKIE_KEY, JSON.stringify(sections), { expires: 7 }); // 7일간 유효
      alert('임시 저장되었습니다!');
    } catch (error) {
      console.error('저장 중 오류 발생:', error);
      alert('저장 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className={styles.container}>
      {roomInfo && (
        <div className={styles.roomInfo}>
          <div className={styles.roomCode}>
            <span className={styles.roomCodeLabel}>회고방 코드</span>
            <span className={styles.roomCodeValue}>{roomInfo.code}</span>
          </div>
          <div className={styles.roomName}>
            <span className={styles.roomNameValue}>{roomInfo.name}</span>
          </div>
        </div>
      )}

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
        <button 
          className={styles.saveButton} 
          onClick={handleSave}
        >
          저장하기
        </button>
        <button className={styles.completeButton}>제출하기</button>
      </footer>
    </div>
  );
};

export default FourLTemplate; 