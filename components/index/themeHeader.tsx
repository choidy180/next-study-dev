import { useEffect, useState } from "react";
import styled from "styled-components";

const ThemeHeader = () => {
    const [themeMode, setThemeMode] = useState<'dark' | 'light'>('dark');
    const themeModeHandle = (e:any) => {
        e.preventDefault();
        setThemeMode(themeMode === 'dark' ? 'light' : 'dark');
    }
    useEffect(() => {
        document.body.dataset.theme = themeMode;
        window.localStorage.setItem('theme', themeMode);
    },[themeMode]);
    return (
        <Container onClick={themeModeHandle}>
            {themeMode === 'dark' ? (
                <p>밝은 모드로 변경</p>
            ) : (
                <p>어두운 모드로 변경</p>
            )}
        </Container>
    )
}

const Container = styled.div`
    position: fixed;
    bottom: 12px;
    left: 20px;
    width: auto;
    max-width: 160px;
    height: 40px;
    padding: 4px 14.5px;
    background-color: #dddddd;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    cursor: pointer;
    border-radius: 6px;
    p {
        margin: 0;
        pointer-events: none;
        user-select: none;
    }
`

export default ThemeHeader;