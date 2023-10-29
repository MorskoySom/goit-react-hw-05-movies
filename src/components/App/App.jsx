import { Route, Routes } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { lazy } from "react";

const HomePage = lazy(() => import("pages/HomePage"))
const MovieDetails = lazy(() => import("pages/MovieDetails"))
const Movies = lazy(() => import("pages/Movies"))
const Cast = lazy(() => import("../Cast/Cast"))
const Reviews = lazy(() => import("../Reviews/Reviews"))

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
