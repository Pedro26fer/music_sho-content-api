import styled from "styled-components";

export const CardProduct = styled.div`

    box-sizing: border-box;
    padding: 7px;

    gap: 5px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    width: 25vw;
    height: 50vh;

    border: 2px solid var(--bordersColors);
    border-radius: 7px;

    background-color: #fff;

    img{
        width: 55%;
        height: 55%
    }

    p{
        font-family: cursive;
        font-weight: 550;
        
    }

    button{
        padding: 5px;
        background-color: var(--backGrounds);

        font-weight: 600;
        color: #fff;
        font-family: cursive;

        border: none;
        border-radius: 8px;

        margin-top: 5px;

        :hover{
            padding: 6px;
        }
    }

    h3{
        font-family: cursive;
        color: var(--headerPurple);
    }


`