import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MovieDetails from "./pages/MovieDetails";
import MovieList from "./pages/MoviesList";
import TVList from "./pages/TVShowsList";
import TVDetails from "./pages/TVDetails";
import CartoonsList from "./pages/CartoonsList";
import MyCollection from "./pages/MyCollection";
import ActorPage from "./pages/ActorPage";
import Footer from "./components/Footer";
import Error from "./pages/Error";

import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} children />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mycollection" element={<MyCollection />} />
          <Route path="/actor/:id" element={<ActorPage />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/tv/:id" element={<TVDetails />} />
          <Route path="movies/" element={<MovieList />} />
          <Route path="TVShows/" element={<TVList />} />
          <Route path="cartoons/" element={<CartoonsList />} />
          <Route path="/search/:keyword" element={<SearchPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </AuthContextProvider>
    </>
  );
}

export default App;
