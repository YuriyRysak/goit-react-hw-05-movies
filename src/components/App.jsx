import { Route, Routes } from "react-router-dom";
import { About } from "./About/About";
import { Home } from "./Home/Home";
import { Products } from "./Products/Products";
import { ProductDetails } from "./ProductDetails/ProductDetails";
import { NotFound } from "./NotFound/NotFound";
import { Mission } from "./About/Mission";
import { Team } from "./About/Team";
import { Reviews } from "./About/Reviews";
import { Container, Header, Logo, Link } from "./App.styled";

export const App = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{" "}
          GoMerch Store
        </Logo>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
        <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};