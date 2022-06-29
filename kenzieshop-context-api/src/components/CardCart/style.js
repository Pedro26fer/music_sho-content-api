import styled from "styled-components";

export const CurrentSale = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  background-color: #fff;
  height: 14vh;
  padding: 5px;

  border: 2px solid var(--bordersColors);
  border-radius: 4px;

  img {
    width: 12vw;
    height: 13.5vh;
  }

  div {
    width: 50%;
  }

  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    padding: 5px;
    background-color: var(--backGrounds);

    font-weight: 600;
    color: #fff;
    font-family: cursive;

    border: none;
    border-radius: 8px;
  }
`;
