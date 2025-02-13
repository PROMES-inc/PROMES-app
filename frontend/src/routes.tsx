import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import { ROLES } from "./utils/roles";
import Layout from "./components/Shared/Layout";  // Import Layout
import HomePage from "./pages/Public/HomePage";
import ProjectsPage from "./pages/Public/ProjectsPage";
import ReportPage from "./pages/Public/ReportPage";
import RevenuePage from "./pages/Public/RevenuePage";
import Login from "./pages/Auth/Login";
import DashboardPage from "./pages/Admin/DashboardPage";
import SuperDashboardPage from "./pages/SuperAdmin/SuperDashboardPage";

interface PrivateRouteProps {
  children: React.ReactNode;
  requiredRole?: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, requiredRole }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/" />;
  }

  return children;
};

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">  {/* Ensure full height */}
        <Routes>
          {/* Public Routes (Now Wrapped in Layout) */}
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/projects" element={<Layout><ProjectsPage /></Layout>} />
          <Route path="/report" element={<Layout><ReportPage /></Layout>} />
          <Route path="/revenue" element={<Layout><RevenuePage /></Layout>} />

          {/* Admin Login */}
          <Route path="/login" element={<Login />} />

          {/* Admin Routes */}
          <Route
            path="/admin/dashboard"
            element={
              <PrivateRoute requiredRole={ROLES.ADMIN}>
                <DashboardPage />
              </PrivateRoute>
            }
          />

          {/* Super Admin Routes */}
          <Route
            path="/super-admin/dashboard"
            element={
              <PrivateRoute requiredRole={ROLES.SUPER_ADMIN}>
                <SuperDashboardPage />
              </PrivateRoute>
            }
          />

          {/* Fallback Route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRoutes;
