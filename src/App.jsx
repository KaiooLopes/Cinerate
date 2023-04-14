import styled, { ThemeProvider } from "styled-components";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { darkTheme, lightTheme } from "./assets/themes";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Container = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
`;

const GlobalStyleRoutes = styled.div`
  min-height: 70vh;
`;

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "lightMode"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleClick = () => {
    if (theme === "lightMode") {
      setTheme("darkMode");
    } else {
      setTheme("lightMode");
    }
  };

  return (
    <ThemeProvider theme={theme === "darkMode" ? darkTheme : lightTheme}>
      <Container>
        <Navbar handleClick={handleClick} />
        <GlobalStyleRoutes>
          <Outlet />
        </GlobalStyleRoutes>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
