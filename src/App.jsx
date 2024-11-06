import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import Users from "./pages/Users";
import { NotFoundPage } from "./pages/NotFoundPage";
import Navbar from "./components/Navbar";
import UserPage from "./pages/UserPage";
import Dashboard from "./pages/Dashboard";
import Welcome from "./components/Welcome";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserPage />} />
        <Route
          path="/usuarios"
          element={<Navigate replace to="/users"></Navigate>}
        />

        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="welcome" element={<Welcome />}/>
        </Route>

        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
