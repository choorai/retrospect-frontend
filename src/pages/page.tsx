import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Rehub(Retrospect Hub)</h1>
      <h2>당신이 원하는 회고 서비스</h2>
      <h3>Route pages</h3>
      <ul>
        <li><Link to={"/"}>ReHub</Link></li>
        <li><Link to={"/main-service"}>주요 서비스</Link></li>
        <li><Link to={"/reHub-templates"}>템플릿</Link></li>
        <li><Link to={"/customer-support"}>고객지원</Link></li>
      </ul>
      <button>시작하기</button>
    </div>
  );
};

export default HomePage;
