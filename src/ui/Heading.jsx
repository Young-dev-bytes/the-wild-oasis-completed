import styled, { css } from "styled-components";

// css just hightlight syntax
const test = css`
  text-align: center;
  /* ${10 > 20
    ? css`
        background-color: yellow;
      `
    : css`
        background-color: #555547;
      `}; */
  ${10 > 0 ? "background-color: yellow" : "background-color: #555547"}
`;

const Heading = styled.h1`
  /* font-size: ${10 > 20 ? "30px" : "20px"};
  font-weight: 600; */
  /* background-color: yellow; */
  /* color: ${(props) => {}}; */
  /* ${(props) => {
    console.log("props", props);
    console.log(props.type === "h1");
    return props.type === "h1"
      ? "background-color: red"
      : "background-color: green";
  }} */

  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}
  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}  
  ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      text-align: center;
    `}   


  line-height: 1.4
`;

export default Heading;
