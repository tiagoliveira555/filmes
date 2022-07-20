import styles from "./styles.module.css";

import logo from "../../assets/imgs/logo.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link className={styles.title} to={"/"}>Filmes</Link>
        <div>
          <a
            className={styles.github}
            href="https://github.com/tiagoliveira555"
          >
            <img src={logo} alt="Logo" />
            <span>tiagoliveira555</span>
          </a>
        </div>
      </nav>
    </header>
  );
};
