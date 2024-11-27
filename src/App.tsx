import { NavLink, Outlet, useNavigate } from "react-router-dom";

import styles from "./components/Site.module.css";
import { S } from "./components/pages/_styles";

const PATH = {
  ADIDAS: "/adidas",
  PUMA: "/puma",
  ABIBAS: "/abibas",
  PRICES: "/prices",
  PROTECTEDPAGE: "/protectedpage",
} as const;

function App() {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className={styles.header}>
        <h1>HEADER</h1>
      </div>

      <div className={styles.body}>
        <div className={styles.nav}>
          <S.NavWrapper>
            <NavLink to={PATH.ADIDAS}>ADIDAS</NavLink>
          </S.NavWrapper>
          <S.NavWrapper>
            <NavLink to={PATH.PUMA}>PUMA</NavLink>
          </S.NavWrapper>
          <S.NavWrapper>
            <NavLink to={PATH.ABIBAS}>ABIBAS</NavLink>
          </S.NavWrapper>
          <S.NavWrapper>
            <NavLink to={PATH.PRICES}>PRICES</NavLink>
          </S.NavWrapper>
          <S.NavWrapper>
            <NavLink to={PATH.PROTECTEDPAGE}>PROTECTED PAGE</NavLink>
          </S.NavWrapper>
        </div>

        <div className={styles.content}>
          <div className={styles.HorizontalNavigation}>
            <NavLink
              to={PATH.ADIDAS}
              role="button"
              className={styles.LinkLikeButton}
            >
              Go to main page = Adidas
            </NavLink>
            <button onClick={navigateHandler} className={styles.ButtonLikeLink}>
              {" "}
              Go back
            </button>
          </div>
          <Outlet />
        </div>
      </div>

      <div className={styles.footer}>abibas 2023</div>
    </div>
  );
}

export default App;
