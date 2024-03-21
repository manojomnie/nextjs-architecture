import { useState } from 'react';
import Footer from '@components/common/Footer';
import Header from '@components/common/Header';
import Sidebar from '@components/common/Sidebar';
import {
  Content,
  PageContainer,
} from '@components/common/DashboardLayout/DashboardLayout.styles';
import Container from '@material-ui/core/Container';

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isOpened, setOpened] = useState(false);
  const toggleDrawer = () => {
    setOpened((prev) => !prev);
  };

  {
    if (typeof window !== 'undefined' && localStorage.getItem('usertoken')) {
      return (
        <Container>
          <Header isOpened={isOpened} toggleDrawer={toggleDrawer} />
          <Content>
            <Sidebar isOpened={isOpened} />
            <PageContainer>{children}</PageContainer>
          </Content>
          <Footer />
        </Container>
      );
    } else {
      return (
        <Container>
          <Content>
            <PageContainer>{children}</PageContainer>
          </Content>
        </Container>
      );
    }
  }
}
