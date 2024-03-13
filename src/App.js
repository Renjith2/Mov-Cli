import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page-tt/Home";
import Login from "./page-tt/Login";
import Register from "./page-tt/Register";
import ProtectedRoute from "./components/ProtectedRoute";

import "./stylesheets/alignments.css";
import "./stylesheets/custom.css";
import "./stylesheets/sizes.css";
import "./stylesheets/theme.css";
import "./stylesheets/form-elements.css";

import { useSelector } from "react-redux";
import Profile from "./page-tt/Profile";
import Admin from "./page-tt/Admin";
import TheatresForMovie from "./page-tt/TheatresForMovies";
import BookShow from "./page-tt/BookShow";
import Bookings from "./page-tt/Profile/Bookings";
function App() {
  const { loading } = useSelector((state) => state.loaders);
  return (
    <div>
      {loading && (
        <div className="loaders-parent">
          <div className="loader"></div>
        </div>
      )}
      <BrowserRouter>
        <Routes>
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/movie/:id"
            element={
              <ProtectedRoute>
                <TheatresForMovie />
              </ProtectedRoute>
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
           <Route
            path="/book-show/:id"
            element={
              <ProtectedRoute>
                <BookShow />
              </ProtectedRoute>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
