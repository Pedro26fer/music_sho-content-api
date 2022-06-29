import styled from "styled-components";

export const ResumeBuy = styled.div`


    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    margin-top: 8vh;

    width: 20vw;
    height: 45vh;

    border: 2px solid var(--bordersColors);
    border-radius: 8px;

    background-color: var(--moreBackGrounds);

    div{
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 90%;

        p{
            font-weight: 600;
        }
    }

        button{
            box-sizing: border-box;
            padding: 7px;
            :hover{
                padding: 8px;
            }

            font-size: 17px;

            background-color: var(--backGrounds);

            color: #fff;

            border-radius: 7px;
            border: none
        }

`