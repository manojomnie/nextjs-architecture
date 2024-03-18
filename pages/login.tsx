import type { NextPage } from "next";
import Container from "@components/common/Container";
import { LoginComponent } from "@components/user/login";

const Login: NextPage = () => {
  return (
    <Container title="Login">
      <LoginComponent  />
    </Container>
  );
};

export default Login;
