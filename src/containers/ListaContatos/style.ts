import { styled } from "styled-components";
import { Cores } from "../../styles/global";

export const Container = styled.main<{height: string, justifyContent: string, overflow?: string}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  justify-content: ${(props) => props.justifyContent};
  overflow-y: ${(props) => props.overflow};

  width: 1536px;
  height: ${(props) => props.height};
  border-radius: 0.3rem;
  margin: 0 auto;
  margin-top: 2rem;

  background-color: ${Cores.textColor};
  color: ${Cores.backgroundColor};
  box-shadow: rgba(248, 93, 16, 0.4) -5px 5px, rgba(248, 93, 16, 0.3) -10px 10px, rgba(248, 93, 16, 0.2) -15px 15px, rgba(248, 93, 16, 0.1) -20px 20px, rgba(248, 93, 16, 0.05) -25px 25px;

  h1 {
    margin: 2rem 0;
  }
`;
