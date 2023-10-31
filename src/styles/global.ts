import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        a{
            text-decoration: none;
        }

        ul li {
            list-style: none;
        }

        body{
            background-color: #111111;
            color: #FFF;
            font-family: Roboto, sans-serif;
        }
    }
`;

export const Cores = {
  mainColor: "#F85D10",
  backgroundColor: "#111111",
  textColor: "#FFF",
  vermelho50: "#C61E12",
  verde50: "#008000",
};
