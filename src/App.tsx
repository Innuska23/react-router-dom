import React from 'react';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { Error404 } from "./components/pages/Error404";
import { PageOne } from "./components/pages/Adidas";
import { PageTwo } from "./components/pages/Puma";
import { PageThree } from "./components/pages/Abibas";
import styles from "./components/Site.module.css";
import { S } from './components/pages/_styles';
import { Model } from './components/pages/model';


const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    MODEL: '/adidas/:id',
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
                    <a href="page3">page3 HTML</a>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/page1'} />} />

                        <Route path={PATH.ADIDAS} element={<PageOne />} />
                        <Route path={PATH.PUMA} element={<PageTwo />} />
                        <Route path={PATH.ABIBAS} element={<PageThree />} />
                        <Route path={PATH.MODEL} element={<Model />} />

                        <Route path={'/*'} element={<Error404 />} />
                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}

export default App;

