import HomePage from "pages/HomePage";
import MoviesPage from "pages/MoviesPage";
import { NavLink, Route, Routes } from "react-router-dom";
import styled from 'styled-components';

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
        <Route path="/movies/:movieID" element={<MoviesPage />} />
        <Route path="/movies/:movieId/cast" element={<MoviesPage />} />
        <Route path="/movies/:movieId/reviews" element={<MoviesPage />} />
      </Routes>
    </div>
  );
};
