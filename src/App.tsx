import React from "react";
import "./App.css";
import Movies from "./components/Movies";
import NavbarMenu from "./components/NavbarMenu";
import ToggleThemeBtn from "./components/ToggleThemeBtn";
import MovieContextProvider from "./contexts/MovieContext";
import ProgressContextProvider from "./contexts/ProgressContext";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
    return (
        <MovieContextProvider>
            <ProgressContextProvider>
                <ThemeContextProvider>
                    <NavbarMenu />
                    <Movies />
                    <ToggleThemeBtn />
                </ThemeContextProvider>
            </ProgressContextProvider>
        </MovieContextProvider>
    );
}

export default App;
