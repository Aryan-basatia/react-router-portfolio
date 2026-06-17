import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import ProjectDetail from "./pages/ProjectDetail";
import DashboardLayout from "./layouts/DashboardLayout";
import Profile from "./pages/Profile";
import Setting from "./pages/Setting";
import Activity from "./pages/Activity";
import Success from "./pages/Success";
import Notfound from "./pages/Notfound";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Profile />} />
          <Route path="settings" element={<Setting />} />
          <Route path="activity" element={<Activity />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
