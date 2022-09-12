import styled from "styled-components";
import tw from "tailwind-styled-components/dist/tailwind";

export const HomeContainer = styled.div`
    background: linear-gradient(to right, #E6DACE 35%, white 35%);

    display: flex;
    flex-direction: column;
    align-items: center;

    @media(max-width: 700px){
        background: linear-gradient(to top, #E6DACE 80%, white 80%);
    }
`
