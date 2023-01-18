import { useEffect, useState } from "react";
import styled from "styled-components";

const ThemeHeader = () => {
    const [theme, setTheme] = useState('');
    const themeModeHandle = () => {
        theme === 'dark' ? document.body.dataset.theme = 'light' : document.body.dataset.theme = 'dark';
        theme === 'dark' ? localStorage.theme='light' : localStorage.theme='dark';
        theme === 'dark' ? setTheme('light') : setTheme('dark');

    }
    useEffect(() => {
        setTheme(localStorage.theme);
        localStorage.theme === 'dark' ? localStorage.theme='dark' : localStorage.theme='light';
        localStorage.theme === 'dark' ? document.body.dataset.theme = 'dark' : document.body.dataset.theme = 'light'; 
    },[]);
    return (
        <Container onClick={themeModeHandle}>
            {theme !== 'light' ? (
                <p><span>☀️</span>&nbsp; 밝게 보기</p>
            ) : (
                <p><span>🌙</span>&nbsp;어둡게 보기</p>
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
    padding: 4px 10.5px;
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
        display: flex;
        align-items: center;
        span {
            font-size: 20px;
        }
    }
`

export default ThemeHeader;