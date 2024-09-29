import React, { useState } from 'react';
import styles from '../../styles/login/Login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const loginData = {
      email: email,
      password: password,
    };

    axios
      .post('http://localhost:8080/auth/login', loginData)
      .then((response) => {
        const result = response.data;

        if (result.errorCode) {
          throw new Error(result.errorMessage);
        }

        const { accessToken, refreshToken } = result;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);

        navigate('/');
      })
      .catch((err) => {
        toast.error(`로그인 실패 - ${err.message}`);
      });
  };

  return (
    <section className={styles.rootContainer}>
      <div className={styles.content}>
        <div className={styles.title}>로그인을 하면 회고를 저장할 수 있어요.</div>
        <div className={styles.inputContainer}>
          <form action="" method="post" onSubmit={handleLogin}>
            <label htmlFor="id">아이디</label>
            <input
              className={`${styles.inputComponent} ${styles.inputMargin}`}
              id="id"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              placeholder={'아이디'}
            />
            <label htmlFor="password">비밀번호</label>
            <input
              className={`${styles.inputComponent} ${styles.inputMargin}`}
              id="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder={'비밀번호'}
            />
            <input
              className={`${styles.inputComponent} ${styles.inputMargin} ${styles.loginButton}`}
              type="submit"
              value={'로그인'}
            />
          </form>
        </div>
        <ul className={`${styles.sub}`}>
          <li>
            <Link className={styles.navLinkText} to={''}>
              회원가입
            </Link>
          </li>
          <li>
            <Link className={styles.navLinkText} to={''}>
              아이디/비밀번호 찾기
            </Link>
          </li>
        </ul>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </section>
  );
};

export default Login;
