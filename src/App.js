import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import MovieDetails from "./pages/MovieDetails";
import MovieList from "./pages/MoviesList";
import TVList from "./pages/TVShowsList";
import TVDetails from "./pages/TVDetails";
import CartoonsList from "./pages/CartoonsList";
import MyCollection from "./pages/MyCollection";

function App() {
  return (
    <>
      <AuthContextProvider>
        <></>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mycollection" element={<MyCollection />} />

          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/tv/:id" element={<TVDetails />} />
          <Route path="movies/" element={<MovieList />} />
          <Route path="TVShows/" element={<TVList />} />
          <Route path="cartoons/" element={<CartoonsList />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
