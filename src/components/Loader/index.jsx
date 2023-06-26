import styles from "./Loader.module.css";
import { scrollToTop } from "../../helpers";

function Loader() {
  scrollToTop();

  return (
    <div className={styles.loader_wrapper}>
      <span className={styles.loader}></span>
    </div>
  );
}

export default Loader;
