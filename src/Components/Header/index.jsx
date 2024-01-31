import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <span>Flix Flix</span>
      </Link>

      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/Watch">Watch</Link>
        <Link to="/Search">Procurar</Link>
      </nav>
    </header>
  );
}

export default Header;
