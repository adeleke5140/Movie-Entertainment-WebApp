import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// components/pages
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import MoviesGenre from "./components/pages/movies/MoviesGenre";
import TVGenre from "./components/pages/TVshows/TVGenre";
import MovieDetail from "./components/pages/movies/MovieDetail";
import TVShowDetail from "./components/pages/TVshows/TVShowDetail";
import MovieGenreInfo from "./components/pages/movies/MovieGenreInfo";
import TVGenreInfo from "./components/pages/TVshows/TVGenreInfo";

// components/layouts/movies
import RootLayout from "./components/layouts/RootLayout";
import TrendsLayout from "./components/layouts/movies/TrendsLayout";
import PopularLayout from "./components/layouts/movies/PopularMoviesLayout";
import NowPlayingMoviesLayout from "./components/layouts/movies/NowPlayingMoviesLayout";
import TopRatedMoviesLayout from "./components/layouts/movies/TopRatedMoviesLayout";
import UpcomingMoviesLayout from "./components/layouts/movies/UpComingMoviesLayout";

// components/layouts/TVshows
import TrendingShows from "./components/layouts/TVshows/TrendingShows";
import PopularShows from "./components/layouts/TVshows/PopularShows";
import AiringToday from "./components/layouts/TVshows/AiringToday";
import OnAir from "./components/layouts/TVshows/OnAir";
import TopRatedShows from "./components/layouts/TVshows/TopRatedShows";

// search result
import SearchResults from "./components/layouts/SearchResults";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      {/* homepage navigation links */}
      <Route index element={<Home />} />
      <Route path="search" element={<SearchResults />} />

      <Route path="movies/:id" element={<MovieDetail />} />
      <Route path="tv/:id" element={<TVShowDetail />} />

      <Route path="movies/genres">
        <Route index element={<MoviesGenre />} />
        <Route path=":genre/:id" element={<MovieGenreInfo />} />
        <Route path=":genre/:id/:movieId" element={<MovieDetail />} />
      </Route>

      <Route path="search">
        <Route path="movie/:id" element={<MovieDetail />} />
        <Route path="tv/:id" element={<TVShowDetail />} />
      </Route>

      <Route path="movies/:name">
        <Route path=":id" element={<MovieDetail />} />
      </Route>

      <Route path="tv/:name">
        <Route path=":id" element={<TVShowDetail />} />
      </Route>

      <Route path="tv/genres">
        <Route index element={<TVGenre />} />
        <Route path=":genre/:id" element={<TVGenreInfo />} />
        <Route path=":genre/:id/:tvId" element={<TVShowDetail />} />
      </Route>

      {/* see more btns movies*/}
      <Route path="movies/trends" element={<TrendsLayout />} />
      <Route path="movies/popular-movies" element={<PopularLayout />} />
      <Route path="movies/now-playing" element={<NowPlayingMoviesLayout />} />

      <Route path="movies/upcoming-movies" element={<UpcomingMoviesLayout />} />
      <Route path="movies/toprated-movies" element={<TopRatedMoviesLayout />} />

      {/* see more btns tvshows */}
      <Route path="tv/trends" element={<TrendingShows />} />
      <Route path="tv/popular-movies" element={<PopularShows />} />
      <Route path="tv/airing" element={<AiringToday />} />
      <Route path="tv/on-air" element={<OnAir />} />
      <Route path="tv/toprated" element={<TopRatedShows />} />

      {/* Custom 404 Page */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
