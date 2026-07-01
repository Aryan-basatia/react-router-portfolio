import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/success", { state: { name: name } });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
}
