import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import metropolis from "./assets/fonts/metropolis.otf";

// react-router
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Search from "./pages/Search";

//css
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  *{
    font-family: "League Spartan";
    margin: 0;
    padding: 0;
  }

  a{
    text-decoration: none;
  }

  @font-face {
    font-family: metropolis;
    src: url(${metropolis});
  }

`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
