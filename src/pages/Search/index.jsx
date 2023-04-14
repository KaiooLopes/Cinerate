import { Container, NoMovies } from "./styles";
import { useQuery } from "../../hooks/useQuery";
import { useEffect, useState } from "react";
import Paginate from "../../components/Paginate";
import MovieCard from "../../components/MovieCard";
import Loader from "../../components/Loader";
import { BsEmojiFrown } from "react-icons/bs";

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const query = useQuery();
  const search = query.get("query");
  const [loading, setLoading] = useState(false);
  const [movieQuery, setMovieQuery] = useState([]);
  const [pages, setPages] = useState();
  const [currentPage, setCurrentPage] = useState(0);

  const getQuery = async (url) => {
    setLoading(true);
    const res = await fetch(url);
    const data = await res.json();
    setMovieQuery(data.results);
    setPages(data.total_pages);
    setLoading(false);
  };

  const handlePageClick = (num) => {
    if (
      (currentPage === 0 && num === -1) ||
      (currentPage === pages - 1 && num === +1)
    ) {
      return;
    }
    if (num === +1) {
      setCurrentPage(currentPage + 1);
    } else if (num === -1) {
      setCurrentPage(currentPage - 1);
    } else if (num === 0) {
    } else if (num === "start") {
      setCurrentPage(0);
    } else if (num === "end") {
      setCurrentPage(pages - 1);
    }
  };

  useEffect(() => {
    const urlMovies = `${moviesUrl}search/movie?${apiKey}&query=${search}&language=pt-BR&page=${
      currentPage + 1
    }`;
    getQuery(urlMovies);
  }, [search, currentPage]);

  console.log(search);

  useEffect(() => {
    setCurrentPage(0);
  }, [search]);
  return (
    <Container>
      <section>
        {!loading && movieQuery.length === 0 && (
          <NoMovies>
            <BsEmojiFrown />
            <h3>Não foi encontrado nenhum filme para esta busca.</h3>
          </NoMovies>
        )}
        {loading && <Loader />}
        {!loading &&
          movieQuery &&
          movieQuery.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </section>
      {!loading && movieQuery.length > 0 && (
        <Paginate
          handlePageClick={handlePageClick}
          pages={pages}
          currentPage={currentPage}
        />
      )}
    </Container>
  );
};

export default Search;
