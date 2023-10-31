import { styled } from "styled-components";
import { Cores } from "../../styles/global";

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  border: 1px solid ${Cores.mainColor};
  border-radius: 1rem;
  padding: 3rem;
  margin-bottom: 2rem;
  max-width: 1300px;
  min-width: 1300px;

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  p {
    margin-right: 3rem;
  }

  #nome {
    width: 20rem;
  }

  #email{
    width: 20rem;
  }

  #numero {
    width: 10rem;
  }

  .btn-salvar {
    background-color: ${Cores.verde50};
  }

  .btn-remover {
    background-color: ${Cores.vermelho50};
  }
`;

export const Label = styled.label`
  font-weight: bold;
  margin-right: 0.5rem;
`;

export const TextArea = styled.textarea`
  height: 1.2rem;
  margin-right: 2rem;
  border-radius: 0.3rem;
  font-size: 1rem;

  font-family: Roboto, sans-serif;
  white-space: nowrap;
  border: none;
  resize: none;
  text-align: center;
  font-weight: bold;
  color: ${Cores.mainColor};
`;

export const Button = styled.button`
  font-weight: bold;
  cursor: pointer;

  padding: 0.2rem 0.6rem;
  margin-right: 1rem;
  border: 0.5px solid black;
  border-radius: 0.2rem;
  color: ${Cores.textColor};
`;
