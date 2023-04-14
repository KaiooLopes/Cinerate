import { useParams } from "react-router-dom";
import MovieCard from "../../components/MovieCard";
import { Container, MovieDetail } from "./styles";
import { useEffect, useState } from "react";
import { MdDateRange } from "react-icons/md";
import { BiTimeFive, BiLibrary } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import Loader from "../../components/Loader";

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const urlImage = import.meta.env.VITE_IMG;

const Movie = ({}) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState();
  const [date, setDate] = useState("");

  const getMovieById = async (url) => {
    setLoading(true);
    const res = await fetch(url);
    const data = await res.json();
    setMovie(data);
    formatDate(data.release_date);
    setLoading(false);
  };

  const formatDate = (date) => {
    const dateObj = new Date(date);
    let day = (dateObj.getDate() + 1).toString().padStart(2, "0");
    let month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
    let year = dateObj.getFullYear().toString();
    setDate(`${day}/${month}/${year}`);
  };

  useEffect(() => {
    const urlMovie = `${moviesUrl}movie/${id}?${apiKey}&language=pt-BR`;
    getMovieById(urlMovie);
  }, []);

  return (
    <Container>
      {loading && <Loader />}
      {!loading && movie && (
        <section>
          <img src={`${urlImage}${movie.poster_path}`} alt={movie.title} />
          <MovieDetail>
            <h1>{movie.title}</h1>
            {movie.overview ? (
              <p>{movie.overview}</p>
            ) : (
              <p>Este filme não tem sinopse</p>
            )}
            <div>
              <div>
                <h4>
                  <FaStar /> Avaliação
                </h4>
                <p>{movie.vote_average.toFixed(1)}</p>
              </div>
              <div>
                <h4>
                  <MdDateRange /> Data de lançamento
                </h4>
                <p>{date}</p>
              </div>
              <div>
                <h4>
                  <BiTimeFive /> Duração
                </h4>
                <p>{movie.runtime} minutos</p>
              </div>
              <div>
                <h4>
                  <BiLibrary /> Gênero
                </h4>
                <p>
                  {movie.genres.map((genre, i) => {
                    let concat = "/";
                    if (i + 1 === movie.genres.length) {
                      concat = "";
                    }
                    return `${genre.name} ${concat} `;
                  })}
                </p>
              </div>
            </div>
          </MovieDetail>
        </section>
      )}
    </Container>
  );
};

export default Movie;
