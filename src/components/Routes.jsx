import { BrowserRouter, Route, Routes as RouterRoutes, Navigate } from "react-router-dom";
import App from "../App";
import Login from "./Login";
import Dashboard from "./Dashboard";
import PortfolioList from "./PortfolioList";
import CreatePortfolio from "./CreatePortfolio";
import EditPortfolio from "./EditPortfolio";
import CreateAbout from "./CreateAbout";
import EditAbout from "./EditAbout";
import AboutList from "./AboutList";


const RouteConfig = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
        />
        {/* Rute untuk Portfolio */}
        <Route
          path="/Portfolio"
          element={isLoggedIn ? <PortfolioList /> : <Navigate to="/login" />}
        />
        <Route
          path="/portfolio/create"
          element={isLoggedIn ? <CreatePortfolio /> : <Navigate to="/login" />}
        />
        <Route
          path="/portfolio/edit/:id"
          element={isLoggedIn ? <EditPortfolio /> : <Navigate to="/login" />}
        />

<Route
          path="/about"
          element={isLoggedIn ? <AboutList /> : <Navigate to="/login" />}
        />
        <Route
          path="/about/create"
          element={isLoggedIn ? <CreateAbout /> : <Navigate to="/login" />}
        />
        <Route
          path="/about/edit/:id"
          element={isLoggedIn ? <EditAbout /> : <Navigate to="/login" />}
        />
      </RouterRoutes>
    </BrowserRouter>
  );
};

export default RouteConfig;
