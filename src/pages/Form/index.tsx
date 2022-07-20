import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Movie } from "../../types/Movie";
import styles from "./styles.module.css";

export const Form = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState<Movie>();

  const [email, setEmail] = useState("");
  const [score, setScore] = useState("");

  useEffect(() => {
    fetch(`https://tiagoliveira555-dsmovie.herokuapp.com/movies/${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const body = {
      movieId: id,
      email,
      score,
    };

    const method = {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    };

    console.log(body)

    fetch(`https://tiagoliveira555-dsmovie.herokuapp.com/scores`, method).then(
      () => navigate("/")
    );
  };

  return (
    <div className={styles.container}>
      <img src={movie?.image} alt={movie?.title} />
      <form className={styles.form}>
        <div className={styles.form_inputs}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.form_inputs}>
          <label htmlFor="score">Estrelas:</label>
          <select
            onChange={(e) => setScore(e.target.value)}
            className={styles.select}
            name="score"
            id="score"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className={styles.button_container}>
          <button onClick={handleSubmit}>Enviar</button>
          <Link to={"/"}>Voltar</Link>
        </div>
      </form>
    </div>
  );
};
