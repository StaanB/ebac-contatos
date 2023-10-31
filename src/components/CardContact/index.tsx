import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as S from './style'
import { remover, editar } from "../../store/reducers/contatos";

type Props = {
  nome: string;
  email: string;
  numero: string;
  id: number;
};

export const ContactCard = (props: Props) => {
  const dispatch = useDispatch();
  const [editando, setEditando] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [numero, setNumero] = useState("");

  useEffect(() => {
    if (props.nome.length > 0) {
      setNome(props.nome);
    }

    if (props.email.length > 0) {
      setEmail(props.email);
    }

    if (props.numero.length > 0) {
      setNumero(props.numero);
    }
  }, [props.nome, props.email, props.numero]);

  const cancelouEdicao = () => {
    setEditando(false);

    setNome(props.nome);

    setEmail(props.email);

    setNumero(props.numero);
  };

  return (
    <>
      <S.CardContainer id={`${props.id}`}>
        <S.Label htmlFor="nome">Nome Completo: </S.Label>
        <S.TextArea
          name="nome"
          id="nome"
          placeholder="Exemplo dos Santos da Silva"
          value={nome}
          disabled={!editando}
          onChange={(e) => setNome(e.target.value)}
        ></S.TextArea>

        <S.Label htmlFor="email">Email: </S.Label>
        <S.TextArea
          name="email"
          id="email"
          placeholder="exemplo@exemplo.com"
          value={email}
          disabled={!editando}
          onChange={(e) => setEmail(e.target.value)}
        ></S.TextArea>

        <S.Label htmlFor="numero">Número: </S.Label>
        <S.TextArea
          name="numero"
          id="numero"
          placeholder="(99) 99999-9999"
          value={numero}
          disabled={!editando}
          onChange={(e) => setNumero(e.target.value)}
        ></S.TextArea>

        {editando ? (
          <S.Button
            onClick={() => {
              dispatch(
                editar({
                  nome,
                  email,
                  numero,
                  id: props.id,
                })
              );
              setEditando(false);
            }}
            type="button"
            className="btn-salvar"
          >
            Salvar
          </S.Button>
        ) : (
          <S.Button
            onClick={() => {
              setEditando(!editando);
            }}
            type="button"
            className="btn-salvar"
          >
            Editar
          </S.Button>
        )}

        {editando ? (
          <S.Button
            onClick={cancelouEdicao}
            type="button"
            className="btn-remover"
          >
            Cancelar
          </S.Button>
        ) : (
          <S.Button
            onClick={() => dispatch(remover(props.id))}
            type="button"
            className="btn-remover"
          >
            Remover
          </S.Button>
        )}
      </S.CardContainer>
    </>
  );
};
