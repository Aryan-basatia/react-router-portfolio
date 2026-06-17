import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/dashboard/settings">Settings</Link>
      <Link to="/dashboard/activity">Activity</Link>
    </nav>
  );
}
