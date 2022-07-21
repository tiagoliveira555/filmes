import { useEffect, useState } from "react";

import { Card } from "../../components/Card";
import { Pagination } from "../../components/Pagination";

import { Movie } from "../../types/Movie";
import { Pages } from "../../types/Page";
import { UrlBase } from "../../utils/UrlBase";

import styles from "./styles.module.css";

export const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const [numberPage, setNumberPage] = useState(0);
  const [page, setPage] = useState<Pages>({
    content: [],
    pageable: true,
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 0,
    number: 0,
    sort: true,
    first: true,
    numberOfElements: 0,
    empty: true,
  });

  useEffect(() => {
    fetch(`${UrlBase}/movies?page=${numberPage}&size=12&sort=id`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.content);
        setPage(data);
      });
  }, [numberPage]);

  return (
    <>
      <Pagination page={page} setNumberPage={setNumberPage} />
      <main className={styles.container}>
        {movies.length > 0 ? (
          movies.map((movie) => <Card key={movie.id} movie={movie} />)
        ) : (
          <p>Caregando...</p>
        )}
      </main>
      <Pagination page={page} setNumberPage={setNumberPage} />
    </>
  );
};
