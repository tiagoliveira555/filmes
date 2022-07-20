import styles from "./styles.module.css";
import StarFull from "../../assets/imgs/start-full.svg";
import StarHalf from "../../assets/imgs/start-half.svg";
import StarEmpty from "../../assets/imgs/start-empty.svg";

type Props = {
  score: number;
};

type PropsFill = {
  fill: number;
};

const getFills = (score: number) => {
  const fills = [0, 0, 0, 0, 0];

  const integerPart = Math.floor(score);

  for (let i = 0; i < integerPart; i++) {
    fills[i] = 1;
  }

  const diff = score - integerPart;
  if (diff > 0) {
    fills[integerPart] = 0.5;
  }

  return fills;
};

const Star = ({ fill }: PropsFill) => {
  if (fill === 0) {
    return <img src={StarEmpty} alt="Empty" />;
  } else if (fill === 1) {
    return <img src={StarFull} alt="Full" />;
  } else {
    return <img src={StarHalf} alt="Half" />;
  }
};

export const Stars = ({ score }: Props) => {
  const fills = getFills(score);

  return (
    <div className={styles.star_container}>
      <Star fill={fills[0]} />
      <Star fill={fills[1]} />
      <Star fill={fills[2]} />
      <Star fill={fills[3]} />
      <Star fill={fills[4]} />
    </div>
  );
};
