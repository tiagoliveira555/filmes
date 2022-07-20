import { Link } from "react-router-dom";
import { Movie } from "../../types/Movie";
import { Stars } from "../Stars";
import styles from "./styles.module.css";

type Props = {
  movie: Movie;
};

export const Card = ({ movie }: Props) => {
  return (
    <div className={styles.card}>
      <img src={movie.image} alt={movie.title} />

      <h3>{movie.title}</h3>
      <div className={styles.evaliation}>
        <p>{movie.score !== 0 ? movie.score.toFixed(1) : "-"}</p>

        <Stars score={movie.score} />

        <span>{movie.count} Avaliações</span>
      </div>

      <Link className={styles.btn} to={`${movie.id}/form`}>
        Avaliar
      </Link>
    </div>
  );
};
