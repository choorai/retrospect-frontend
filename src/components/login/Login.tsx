import React from 'react';
import styles from '../../styles/login/Login.module.css';

const Login: React.FC = () => {
  return (
    <section className={styles.rootContainer}>
      <div className={styles.content}>
        <div className={styles.title}>로그인을 하면 회고를 저장할 수 있어요.</div>
        <div className={styles.inputContainer}>
          <form action="" method="post">
            <label htmlFor="id">아이디</label>
            <input
              className={`${styles.inputComponent} ${styles.inputMargin}`}
              id="id"
              type="text"
              placeholder={'아이디'}
            />
            <label htmlFor="password">비밀번호</label>
            <input
              className={`${styles.inputComponent} ${styles.inputMargin}`}
              id="password"
              type="password"
              placeholder={'비밀번호'}
            />
            <input
              className={`${styles.inputComponent} ${styles.inputMargin} ${styles.loginButton}`}
              type="button"
              value={'로그인'}
            />
          </form>
        </div>
        <ul className={`${styles.sub}`}>
          <li>
            <a href="">회원가입</a>
          </li>
          <li>
            <a href="">아이디/비밀번호 찾기</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Login;
