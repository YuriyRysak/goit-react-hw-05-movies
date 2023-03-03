import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "components/Loader/Loader.jsx";
import { Container, Header, Logo, Link } from "./SharedLayout.styled.js";

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{" "}
          T M D B
        </Logo>
        <nav>
          <Link to="/" end>Home</Link>
          <Link to="/movies">Movies</Link>
          
          
        </nav>
      </Header>
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
