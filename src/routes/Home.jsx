import React from "react";

import { useContext } from 'react';
import { ThemeContext } from "../context/TheContext";

const Home = () => {

  const { theme, toogleTheme } = useContext(ThemeContext);

  return <div>
    <h1>Página inicial</h1>
    <button onClick={toogleTheme}>Mudar tema</button>
    <p>O tema inicial é: { theme }</p>
  </div>;
};

export default Home;
