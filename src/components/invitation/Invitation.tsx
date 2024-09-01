import React, { useState } from 'react';
import styles from './Invitation.module.css';

const Invitation: React.FC = () => {
  const [copyLink] = useState('www.naver.com'); // TODO: 추후 API 연동

  const handleOnCopyLink = (): void => {
    const element = document.querySelector('.copyLink');
    const link = element!.textContent;
    navigator.clipboard.writeText(link || '').then(() => {
      alert('복사 완료!');
    });
  };

  return (
    <section className={styles.rootContainer}>
      <div className={styles.content}>
        <div className={styles.title}>회고를 함께 할 사람을 초대해보세요!</div>
        <div className={styles.subTitle}>
          공유 링크: <span className={'copyLink'}>{copyLink}</span>
          <button className={styles.copyButton} onClick={handleOnCopyLink}>
            📝 복사하기
          </button>
        </div>
      </div>
    </section>
  );
};

export default Invitation;
