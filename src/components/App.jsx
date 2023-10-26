import HomePage from "pages/HomePage";
import MovieDetails from "pages/MovieDetails";
import MoviesPage from "pages/MovieDetails";
import NotFoundPage from "pages/NotFoundPage";
import { Route, Routes } from "react-router-dom";
import Cast from "./Cast";
import Reviews from "./Reviews";
import { Layout } from "./Layout";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
