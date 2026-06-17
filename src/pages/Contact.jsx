import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/success", { state: { name: "Alice" } });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="name" />
        <button type="submit">Send</button>
      </form>
    </>
  );
}
