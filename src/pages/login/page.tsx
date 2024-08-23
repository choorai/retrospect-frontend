import MainNavBar from '../../components/main/MainNavBar';
import React from 'react';

const LoginPage = () => {
  return (
    <>
      <MainNavBar />
      <div>로그인을 하면 회고를 저장할 수 있어요.</div>
      <div>
        <form action="" method="post">
          <label htmlFor="id">아이디</label>
          <input id="id" type="text" />
          <label htmlFor="password">비밀번호</label>
          <input id="password" type="password" />
        </form>
        <div><a href="">회원가입</a></div>
        <div><a href="">아이디/비밀번호 찾기</a></div>
      </div>
    </>
  );
};

export default LoginPage;
