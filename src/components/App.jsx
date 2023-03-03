
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { PAGE_NAMES } from "router/paths";

const Home = lazy(() => import("../pages/Home"));
const Movies = lazy(() => import("../pages/Movies.jsx"));
const MovieDetails = lazy(() => import("../pages/MovieDetails.jsx"));
const Cast = lazy(() => import("./Cast/Cast.jsx"));
const Reviews = lazy(() => import("./Reviews/Reviews.jsx"));
const NotFound = lazy(() => import("../pages/NotFound.jsx"));

export const App = () => {
  return (
    <Routes>
      <Route path={PAGE_NAMES.home} element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />}>
        <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
