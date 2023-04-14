import Loader from "../../components/Loader";
import MovieCard from "../../components/MovieCard";
import Paginate from "../../components/Paginate";
import { ContainerMovies, HeaderSection } from "./styles";

import { useState, useEffect } from "react";
import Select from "react-select";

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [pages, setPages] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [queryGenre, setQueryGenre] = useState(null);

  const optionsGenres = genres.map((genre) => {
    return {
      value: genre.id,
      label: genre.name,
    };
  });

  const getMovies = async (url) => {
    setLoading(true);
    const res = await fetch(url);
    const data = await res.json();
    if (data.total_pages > 500) {
      setPages(500);
    } else {
      setPages(data.total_pages);
    }
    setMovies(data.results);
    setLoading(false);
  };

  const getGenresMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setGenres(data.genres);
  };

  useEffect(() => {
    const genres = `${moviesUrl}genre/movie/list?${apiKey}&language=pt-BR`;
    getGenresMovies(genres);
    let url;
    if (!queryGenre) {
      url = `${moviesUrl}movie/top_rated?${apiKey}&language=pt-BR&include_adult=false&include_video=false&sort_by=popularity.desc&page=${
        currentPage + 1
      }`;
    } else if (queryGenre) {
      url = `${moviesUrl}discover/movie?${apiKey}&with_genres=${
        queryGenre.value
      }&language=pt-BR&include_adult=false&include_video=false&sort_by=popularity.desc&page=${
        currentPage + 1
      }`;
    }
    getMovies(url);
  }, [queryGenre, currentPage]);

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

  return (
    <ContainerMovies>
      <HeaderSection>
        <h1>Melhores filmes:</h1>
        <Select
          className="basic-single"
          classNamePrefix="select"
          defaultValue="Gêneros"
          isDisabled={false}
          isLoading={false}
          isClearable={true}
          isRtl={false}
          isSearchable={true}
          name="genres"
          options={optionsGenres}
          placeholder="Gêneros..."
          value={queryGenre}
          onChange={(e) => {
            setQueryGenre(e);
            setCurrentPage(0);
          }}
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              width: "250px",
              backgroundColor: "#f1f1f1",
              color: "#363636",
            }),
            option: (styles, state) => ({
              ...styles,
              backgroundColor: "#f1f1f1",
              color: "#363636",
              "&:hover": {
                backgroundColor: "#363636",
                color: "#f1f1f1",
              },
            }),
          }}
        />
      </HeaderSection>
      <section>
        {!loading &&
          movies &&
          movies.map((movie) => {
            return <MovieCard movie={movie} key={movie.id} />;
          })}
        {loading && <Loader />}
      </section>
      <Paginate
        handlePageClick={handlePageClick}
        pages={pages}
        currentPage={currentPage}
      />
    </ContainerMovies>
  );
};

export default Home;
