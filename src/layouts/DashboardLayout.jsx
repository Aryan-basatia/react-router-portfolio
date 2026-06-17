import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div>
      <aside>Sidebar</aside>
      <Outlet />
    </div>
  );
}
