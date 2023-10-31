import styled from "styled-components";
import { Cores } from "../../styles/global";

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;

    width: 30%;
    height: 60%;
`

export const Input = styled.input`
    width: 60%;
    padding: .5rem;
    border-radius: .3rem;
    border: 1px solid ${Cores.mainColor};
    text-align: center;
`

export const Button = styled.button`
    padding: .6rem 1rem;
    border-radius: .4rem;
    background-color: ${Cores.verde50};
    color: ${Cores.textColor};
    
    border: none;
    font-weight: bold;
    cursor: pointer;
`
