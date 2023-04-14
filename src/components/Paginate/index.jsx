import { useEffect, useState } from "react";
import { Container } from "./styles";

const Paginate = ({ handlePageClick, pages, currentPage }) => {
  const [revert, setRevert] = useState(false);
  useEffect(() => {
    if (currentPage >= Math.ceil(pages / 2) && pages > 5) {
      setRevert(true);
    } else {
      setRevert(false);
    }
  }, [currentPage]);

  return (
    <Container>
      {!revert && (
        <>
          <button
            disabled={currentPage === 0 ? true : false}
            onClick={() => handlePageClick(-1)}
          >
            {"<anterior"}
          </button>

          {currentPage !== 0 && (
            <button onClick={() => handlePageClick(-1)}>{currentPage}</button>
          )}

          <button className="selected" onClick={() => handlePageClick(0)}>
            {currentPage + 1}
          </button>

          {pages > 2 && currentPage + 2 < pages && (
            <button onClick={() => handlePageClick(+1)}>
              {currentPage + 2}
            </button>
          )}

          {currentPage !== pages - 1 &&
            pages > 3 &&
            currentPage + 1 !== pages - 1 &&
            currentPage + 2 !== pages - 1 && <button>...</button>}

          {currentPage !== pages - 1 && (
            <button onClick={() => handlePageClick("end")}>{pages}</button>
          )}

          <button
            disabled={currentPage === pages - 1 ? true : false}
            onClick={() => handlePageClick(+1)}
          >
            {"próximo>"}
          </button>
        </>
      )}
      {revert && (
        <>
          <button onClick={() => handlePageClick(-1)}>{"<anterior"}</button>

          <button onClick={() => handlePageClick("start")}>1</button>

          <button>...</button>

          <button onClick={() => handlePageClick(-1)}>{currentPage}</button>

          <button className="selected" onClick={() => handlePageClick(0)}>
            {currentPage + 1}
          </button>

          {currentPage !== pages - 1 && (
            <button onClick={() => handlePageClick(+1)}>
              {currentPage + 2}
            </button>
          )}

          <button
            disabled={currentPage === pages - 1 ? true : false}
            onClick={() => handlePageClick(+1)}
          >
            {"próximo>"}
          </button>
        </>
      )}
    </Container>
  );
};

export default Paginate;
