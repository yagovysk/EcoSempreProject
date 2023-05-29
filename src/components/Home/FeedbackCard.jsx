import styles from "./FeedbackCard.module.css";
import quotes from "../../assets/quotes.svg";
import { Star } from "@phosphor-icons/react";

export function FeedbackCard({ img, imgAlt, stars, name, job, feedback }) {
  return (
    <div className={styles.containerCard}>
      <div className={styles.card}>
        <div className={styles.profileImg}>
          <img src={img} alt={imgAlt} />
        </div>
        <div className={styles.information}>
          <div className={styles.starsWrapper}>
            <Star weight="fill" className={styles.starIcon} />
            <Star weight="fill" className={styles.starIcon} />
            <Star weight="fill" className={styles.starIcon} />
            <Star weight="fill" className={styles.starIcon} />
            <Star weight="fill" className={styles.starIcon} />
          </div>
          <p className={styles.feedback}>{feedback}</p>
          <div className={styles.person}>
            <strong className={styles.name}>{name}</strong>
            <span className={styles.job}>{job}</span>
          </div>
        </div>

        <img className={styles.quotes} src={quotes} alt="" />
      </div>
    </div>
  );
}
