import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import * as S from "./style";
import { adicionar } from "../../store/reducers/contatos";

export const AddContactDiv = () => {
  const dispatch = useDispatch();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [numero, setNumero] = useState("");

  const adicionarContato = (e: FormEvent) => {
    e.preventDefault();

    const nomeForm = (document.getElementById("nomeForm") as HTMLInputElement)
    const emailForm = (document.getElementById("emailForm") as HTMLInputElement)
    const numeroForm = (document.getElementById("numeroForm") as HTMLInputElement)


    dispatch(
      adicionar({
        nome,
        email,
        numero,
      })
    );

    nomeForm.value = ''
    setNome("");
    emailForm.value = ''
    setEmail("");
    numeroForm.value = ''
    setNumero("");
  };

  return (
    <S.Form onSubmit={adicionarContato}>
      <S.Input
        onChange={(e) => setNome(e.target.value)}
        type="text"
        id="nomeForm"
        placeholder="Nome Exemplo da Silva"
        required
      />
      <S.Input
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        id="emailForm"
        placeholder="email@email.com"
        required
      />
      <S.Input
        onChange={(e) => setNumero(e.target.value)}
        type="text"
        id="numeroForm"
        placeholder="(99) 9 9999-9999"
        required
      />
      <S.Button className="btn-salvar" type="submit">
        Adicionar
      </S.Button>
    </S.Form>
  );
};
