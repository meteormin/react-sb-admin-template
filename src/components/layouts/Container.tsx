import React from 'react';
import Navigator, { Menu } from './Navigator';
import Loading from '../common/Loading';
import AlertModal from '../common/AlertModal';
import Footer from './Footer';
import { guard } from '../../helpers';

export interface ContainerProps {
  isLogin: boolean;
  menu: Menu;
  children: React.ReactNode | React.ReactNode[];
  footer: ContainerFooter;
}

export interface ContainerFooter {
  company: string;
  privacyUrl: string;
  termsUrl: string;
}

const Container = ({ isLogin, menu, footer, children }: ContainerProps) => {
  const year = new Date().getFullYear().toString();
  return (
    <div id="layoutSidenav">
      <guard.Protected auth={isLogin}>
        <Navigator menu={menu} />
      </guard.Protected>
      <div id="layoutSidenav_content">
        <main>
          {children}
          <Loading />
          <AlertModal />
        </main>
        <Footer year={year} {...footer} />
      </div>
    </div>
  );
};

export default Container;
