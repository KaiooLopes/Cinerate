import { Link, useNavigate } from "react-router-dom";
import { Container, SwitchTheme } from "./styles";
import { BsSearch, BsSun, BsMoonFill } from "react-icons/bs";
import { useState } from "react";

const Navbar = ({ handleClick }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate(`search?query=${query}`);
  };
  return (
    <Container>
      <Link to="/">Cinerate</Link>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Buscar filmes..."
            value={query || ""}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button>
            <BsSearch />
          </button>
        </form>
      </div>
      <SwitchTheme>
        <div onClick={handleClick}>
          <BsMoonFill />
          <BsSun />
          <span></span>
        </div>
      </SwitchTheme>
    </Container>
  );
};

export default Navbar;
