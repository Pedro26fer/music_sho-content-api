import styled from "styled-components";

export const ProductsCart = styled.ul`
  box-sizing: border-box;
  padding: 10px;
  list-style: none;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 8px;

  width: 54vw;
  min-height: 50vh;
  border-radius: 8px;

  background-color: var(--headerPurple);
`;

export const CartDiv = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 15px;

  padding: 10px;

  margin-top: 6.6vh;
`;

export const NoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  height: 14vh;
  margin: auto;
`;
