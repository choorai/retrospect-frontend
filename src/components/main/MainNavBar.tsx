import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MainNavBar.module.css';

const MainNavBar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link className={styles.logoText} to={'/'}>ReHub</Link>
      </div>
      <ul className={styles.navLinks}>
        <li><Link className={styles.navLinkText} to={'/main-service'}>주요 서비스</Link></li>
        <li><Link className={styles.navLinkText} to={'/re-hub-templates'}>템플릿</Link></li>
        <li><Link className={styles.navLinkText} to={'/customer-support'}>고객지원</Link></li>
      </ul>
    </nav>
  );
};

export default MainNavBar;
