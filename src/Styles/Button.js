import styled from "styled-components";

export const Button = styled.button`
  text-decoration: none;
  max-width: auto;
  // background-color: #EDE3FF;
  background-color: #fbaed2;
  color: #39254D;
  padding: 1.4rem 2.4rem;
  border: none;
  border-radius:10px;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  &:hover,
  &:active {
    box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: scale(0.96);
  }
  a {
    text-decoration: none;
    color:#39254D;
    font-size: 1.6rem;
    font-weight: 550;
  }
`;