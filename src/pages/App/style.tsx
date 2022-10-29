import styled from "styled-components";

export const HomeContainer = styled.div`
    background: linear-gradient(to right, #191522 35%, white 35%);

    display: flex;
    flex-direction: column;
    align-items: center;

    @media(max-width: 700px){
        background: linear-gradient(to top, #191522 80%, white 80%);
    }
`
