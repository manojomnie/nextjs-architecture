import type { NextPage } from 'next';
import Container from '@components/common/Container';
import { Dashboard } from '@components/dashboard';
import { Box, Typography } from '@material-ui/core';

const Home: NextPage = () => {
  return (
    <Container title="Dashboard">
      <Box paddingX={2}>
        <Typography variant="h5" component="h1">
          Dashboard
        </Typography>
      </Box>
      <Dashboard settingData="" />
    </Container>
  );
};

export default Home;
