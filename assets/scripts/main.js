document.addEventListener("DOMContentLoaded", () => {
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = localStorage.getItem("theme");

    if (!theme) {
        document.documentElement.classList.toggle("dark", systemPrefersDark);
    } else {
        document.documentElement.classList.toggle("dark", theme === 'dark');
    }
});

function toggleTheme() {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
}
