import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    
}
html {
  font-size: 62.5%;
  /* scroll-behavior: smooth; */
  /* 1rem = 10px */
  overflow-x: hidden;
}
::-webkit-scrollbar{
  width: 1.6rem;
}

::-webkit-scrollbar-track{
  background-color: #fbaed2;
}

::-webkit-scrollbar-thumb{
  background: #fff;
  border: 5px solid transparent;
  border-radius: 9px;
  background-clip: content-box;
}

h1 {
    color: ${({theme})=> theme.colors.heading};
    font-size:  6rem;
    font-weight: 900;
}
h2 {
    color: ${({theme})=> theme.colors.heading};
    font-size: 4.4rem;
    font-weight: 300;
    white-space: normal;
    text-align: center;
}
h3 {
    font-size: 1.8rem;
    font-weight: 400;
}
p {
    color: ${({theme})=> theme.colors.text};
    opacity: .7;
    font-size: 1.65rem;
    margin-top: 1rem;
    line-height: 1.5;
    font-weight: 400;
}
a{
    color: ${({theme})=> theme.colors.text},
    text-decoration: none;
}
li {
    list-style: none;
}
.container {
  max-width: 120rem;
  margin: 0 auto;
}
.grid {
  display: grid;
  gap: 9rem;
}
.grid-two-column {
  grid-template-columns: repeat(2, 1fr);
  
}
.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}
.grid-four-column{
   grid-template-columns: 1fr 1.2fr .5fr .8fr ;
}
input, textarea{
    max-width: 50rem;
    color: ${({ theme }) => theme.colors.black};
    padding: 0.5rem 2.4rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    text-transform: uppercase;
   box-shadow: ${({ theme }) => theme.colors.shadowSupport};
}
input[type="submit"]{
    max-width: 16rem;
    margin-top: 2rem;
    background-color: ${({ theme }) => theme.colors.btn};
    color: ${({ theme }) => theme.colors.black};
    padding: 0.5rem 2.2rem;
    border-style: solid;
    border-width: .1rem;
    text-transform: uppercase;
    font-size: 1.5rem;
    cursor: pointer;
}

`;