import { useEffect, useState } from "react";

export default function useTheme() {

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        const root = document.documentElement;

        // prevent transition on first load
        root.classList.add("no-theme-transition");

        root.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);

        // enable transitions after load
        setTimeout(() => {
            root.classList.remove("no-theme-transition");
        }, 50);

    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return { theme, toggleTheme };
}
