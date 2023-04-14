import { Container } from "./styles";

import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import noImage from "../../assets/images/WithoutImage.png";

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
  const navigate = useNavigate();

  return (
    <Container
      showLink={showLink}
      onClick={() => {
        if (!showLink) return;
        navigate(`/movie/${movie.id}`);
      }}
    >
      {movie.poster_path && (
        <img src={`${imageUrl}${movie.poster_path}`} alt={movie.title} />
      )}
      {!movie.poster_path && <img src={noImage} alt="Empty" />}
      <h2>{movie.title}</h2>
      <p>
        <FaStar /> {movie.vote_average.toFixed(1)}
      </p>
    </Container>
  );
};

export default MovieCard;
