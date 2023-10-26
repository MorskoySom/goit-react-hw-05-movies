import HomePage from "pages/HomePage";
import MovieDetails from "pages/MovieDetails";
import MoviesPage from "pages/MovieDetails";
import NotFoundPage from "pages/NotFoundPage";
import { NavLink, Route, Routes } from "react-router-dom";
import styled from 'styled-components';
import Cast from "./Cast";
import Reviews from "./Reviews";

const Link = styled(NavLink)`
  &.active {
    color: orange;
  }
`

export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/"> Home </Link>
          <Link to="/movies"> Movies </Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieID" element={<MovieDetails />} />
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
