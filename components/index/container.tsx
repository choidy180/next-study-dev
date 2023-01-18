import dynamic from "next/dynamic";
import styled from "styled-components";

const Header = dynamic(()=> import ('./themeHeader'),{
    ssr: false
});

const Container = ({children}:any) => {
    return (
        <ContainerBox>
            <Header/>
            {children}
        </ContainerBox>
    )
}

const ContainerBox = styled.div`
    width: 100vw;
    min-height: calc(100vh);
    background-color: var(--bg-main);
    @media screen and (max-width: 500px) {
        min-height: auto;
    }
`

export default Container;