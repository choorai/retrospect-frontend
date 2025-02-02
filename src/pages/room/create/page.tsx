import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from '../../../styles/room/create.module.css';

interface LocationState {
  templateId: number;
  templateType: string;
  templateName: string;
}

const CreateRoom: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { templateType, templateName } = location.state as LocationState;

  const [roomName, setRoomName] = useState('');
  const [roomCode] = useState(() => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!roomName.trim()) {
      alert('회고방 이름을 입력해주세요.');
      return;
    }

    const roomInfo = {
      code: roomCode,
      name: roomName,
      templateType,
      templateName,
      createdAt: new Date().toISOString()
    };
    localStorage.setItem(`room_${roomCode}`, JSON.stringify(roomInfo));

    // 템플릿 타입에 따라 다른 페이지로 이동
    switch (templateType) {
      case '4L':
        navigate(`/templates/4L?room=${roomCode}`);
        break;
      case 'KPT':
        navigate(`/templates/kpt?room=${roomCode}`);
        break;
      case '5F':
        navigate(`/templates/5f?room=${roomCode}`);
        break;
      default:
        navigate(`/templates/4L?room=${roomCode}`);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formCard}>
        <h1 className={styles.title}>회고방 만들기</h1>
        
        <div className={styles.templateInfo}>
          <span className={styles.templateLabel}>선택한 템플릿</span>
          <span className={styles.templateName}>{templateName}</span>
        </div>

        <div className={styles.codeSection}>
          <label>회고방 코드</label>
          <div className={styles.codeDisplay}>
            {roomCode.split('').map((char, index) => (
              <span key={index} className={styles.codeChar}>{char}</span>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="roomName">회고방 이름</label>
            <input
              type="text"
              id="roomName"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
              placeholder="회고방 이름을 입력해주세요"
              className={styles.input}
              maxLength={50}
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            생성하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateRoom; 