import styles from "./styles.module.css";

import arrow from "../../assets/imgs/seta.svg";
import { Pages } from "../../types/Page";

type Props = {
  page: Pages;
  setNumberPage: (n: number) => void;
};

export const Pagination = ({ page, setNumberPage }: Props) => {
  const handlePrev = () => {
    setNumberPage(page.number - 1);
  };

  const handleNext = () => {
    setNumberPage(page.number + 1);
  };

  return (
    <div className={styles.container}>
      <button
        onClick={handlePrev}
        className={styles.img_container}
        disabled={page.first}
      >
        <img src={arrow} alt="Arrow Left" />
      </button>

      <div className={styles.numbers}>
        <p>{page.number + 1}</p>
        <span>...</span>
        <p>{page.totalPages}</p>
      </div>

      <button
        onClick={handleNext}
        className={styles.img_container}
        disabled={page.last}
      >
        <img className={styles.img_right} src={arrow} alt="Arrow Rigth" />
      </button>
    </div>
  );
};
