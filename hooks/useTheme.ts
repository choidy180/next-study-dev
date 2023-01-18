import * as React from 'react';

type ThemeKey = 'light' | 'dark';

type ReturnType = {
    theme: ThemeKey;
    isDarkMode: boolean;
    setTheme: (theme: ThemeKey) => void;
    toggleTheme: () => void;
};

const useTheme = (): ReturnType => {
    const [theme, setTheme] = React.useState<ThemeKey>('light');
    const isDarkMode = React.useMemo(() => theme === 'dark', [theme]);

    const initTheme = React.useCallback(() => {
        const preferDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark').matches;
        const initalTheme = (localStorage?.getItem('theme') || (preferDarkMode ? 'dark' : 'light')) as ThemeKey;
        setTheme(initalTheme);
    },[]);

    React.useEffect(()=>{
        initTheme();
    },[]);

    React.useEffect(()=> {
        localStorage.setItem('theme', theme);
        document.body.dataset.theme = theme;
    },[theme]);

    const toggleTheme = React.useCallback(() => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    },[]);

    return { theme, isDarkMode, setTheme, toggleTheme };
}

export default useTheme;