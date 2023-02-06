import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Counter } from "./components/Counter";
import "./index.scss";
import { AboutPageLazy } from "./pages/AboutPage/AboutPage.lazy";
import { MainPageLazy } from "./pages/MainPage/MainPage.lazy";

export const App = () => {
  return (
    <div className="app">
      <Link to={""}>Главная</Link>
      <Link to={"/about"}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageLazy myName="Vadix" />} />
          <Route path={"/"} element={<MainPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};
