import styled from "styled-components";

export const HeaderShop = styled.header`

    width: 100vw;
    height: 10vh;

    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    gap: 10%;

    border-bottom: 1px solid var(--buttonsAndOthers);

    h3, h1 {
        cursor: pointer;
        :hover{
            color: var(--bordersColors);
        }
    }

`

export const CartDiv = styled.div`

    width: 20vw;

    display: flex;
    justify-content: space-between;


`