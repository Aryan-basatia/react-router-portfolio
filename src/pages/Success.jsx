import { useLocation } from "react-router-dom";

export default function Success() {
  const location = useLocation();
  const name = location.state?.name ?? "Guest";

  return <p>Thanks, {name}</p>;
}
