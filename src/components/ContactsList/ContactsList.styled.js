import styled from '@emotion/styled';

export const ContactMenu = styled.ul`
  font-size: 18px;
  color: #18084b;
  text-shadow: 1px 1px 2px rgb(42 36 36 / 89%);
  list-style: number;
`;

export const DeleteBtn = styled.button`
  min-width: 90px;
  padding: 7px 7px;
  color: #151216d6;
  background-color: #bb82f1a3;
  border-radius: 20px;
  border: transparent;
  outline: transparent;
  margin: 0px 0px 25px 25px;

  font-size: 14px;
  font-weight: 700;
  box-shadow: -1px 8px 20px -3px rgba(0, 0, 0, 0.43);

  &:hover {
    transform: scale(1.02);
    text-shadow: 1px 1px 2px whitesmoke;
  }
`;
