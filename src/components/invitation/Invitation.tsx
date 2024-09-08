import React, { useState } from 'react';
import styles from './Invitation.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Invitation: React.FC = () => {
  const [copyLink] = useState('www.naver.com'); // TODO: 추후 API 연동

  const handleOnCopyLink = (): void => {
    const element = document.querySelector('.copyLink');
    const link = element!.textContent;
    navigator.clipboard.writeText(link || '').then(() => {
      toast('📝 복사 완료!');
    });
  };

  return (
    <section className={styles.rootContainer}>
      <div className={styles.content}>
        <div className={styles.title}>회고를 함께 할 사람을 초대해보세요!</div>
        <div className={styles.subtitle}>
          공유 링크: <span className={'copyLink'}>{copyLink}</span>
          <button className={styles.copyButton} onClick={handleOnCopyLink}>
            📝 복사하기
          </button>
          <ToastContainer
            position="bottom-center"
            autoClose={3000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
      </div>
    </section>
  );
};

export default Invitation;
