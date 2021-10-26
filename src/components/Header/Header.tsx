import styles from "./Header.module.scss";
import logoImg from "../../assets/logo.svg";

export function Header() {
  return (
    <div className={styles.boxWrapper}>
      <img src={logoImg} alt="DoWhile 2021" />
    </div>
  );
}
