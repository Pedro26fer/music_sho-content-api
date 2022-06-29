import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: 0;
    }

    :root{
        --bodyPurple: #6F256F;
        --headerPurple: #3B123B;
        --buttonsAndOthers: #070207;
        --bordersColors: #F35DF3;
        --backGrounds: #A23AA2;
        --moreBackGrounds: #F2AFFF;
    }


    body{
        background: var(--backGrounds);
        color: var(--buttonsAndOthers);

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    body, input, button,h1,h2,h3,h4{
        font-family: cursive;
    } 

    h1{
        font-size: 27px;
        font-weight: 700;
    }

    span{
        font-size: 15px;
        font-weight: 600;
        color: var(--bodyPurple);
    }

    h4{
        color: var(--bordersColors);
        font-size: 30px;
    }

    button{
        cursor: pointer;
    }

    a{
        text-decoration: none;
    }

    #root{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    label{
        font-size: 12px;
        font-weight: 600;
    }




`