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
import PengalamanList from "./PengalamanList";
import CreatePengalaman from "./CreatePengalaman";
import EditPengalaman from "./EditPengalaman";
import CvList from "./CvList";
import CreateCv from "./CreateCv";
import EditCv from "./EditCv";
import SertifikatList from "./SertifikatList";
import CreateSertifikat from "./CreateSertifikat";
import EditSertifikat from "./EditSertifikat";
import CreateArticle from "./CreateArticle";
import ArticleList from "./ArticleList";

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
        <Route
          path="/pengalaman"
          element={isLoggedIn ? <PengalamanList /> : <Navigate to="/login" />}
        />
        <Route
          path="/pengalaman/create"
          element={isLoggedIn ? <CreatePengalaman /> : <Navigate to="/login" />}
        />
        <Route
          path="/pengalaman/edit/:id"
          element={isLoggedIn ? <EditPengalaman /> : <Navigate to="/login" />}
        />

<Route
          path="/cv"
          element={isLoggedIn ? <CvList /> : <Navigate to="/login" />}
        />
        <Route
          path="/cv/create"
          element={isLoggedIn ? <CreateCv /> : <Navigate to="/login" />}
        />
        <Route
          path="/cv/edit/:id"
          element={isLoggedIn ? <EditCv /> : <Navigate to="/login" />}
        />


<Route
          path="/sertifikat"
          element={isLoggedIn ? <SertifikatList /> : <Navigate to="/login" />}
        />
        <Route
          path="/sertifikat/create"
          element={isLoggedIn ? <CreateSertifikat /> : <Navigate to="/login" />}
        />
        <Route
          path="/sertifikat/edit/:id"
          element={isLoggedIn ? <EditSertifikat /> : <Navigate to="/login" />}
        />
        <Route
          path="/article"
          element={isLoggedIn ? <ArticleList /> : <Navigate to="/login" />}
        />
        <Route
          path="/article/create"
          element={isLoggedIn ? <CreateArticle /> : <Navigate to="/login" />}
        />
      </RouterRoutes>
    </BrowserRouter>
  );
};

export default RouteConfig;
