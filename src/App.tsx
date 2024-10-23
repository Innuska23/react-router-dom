import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { Error404 } from "./components/pages/Error404";
import { Adidas } from "./components/pages/Adidas";
import { Puma } from "./components/pages/Puma";
import { Abibas } from "./components/pages/Abibas";
import { Model } from './components/pages/model';

import styles from "./components/Site.module.css";
import { S } from './components/pages/_styles';

const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
} as const;

function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>

            <div className={styles.body}>

                <div className={styles.nav}>
                    <S.NavWrapper><NavLink to={PATH.ADIDAS}>ADIDAS</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PUMA}>PUMA</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.ABIBAS}>ABIBAS</NavLink></S.NavWrapper>
                </div>

                <div className={styles.content}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={PATH.ADIDAS} />} />
                        <Route path={PATH.ADIDAS} element={<Adidas />} />
                        <Route path={PATH.PUMA} element={<Puma />} />
                        <Route path={PATH.ABIBAS} element={<Abibas />} />
                        <Route path={'/:model/:id'} element={<Model />} />
                        <Route path={'/*'} element={<Error404 />} />
                    </Routes>
                </div>
            </div>

            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}

export default App;