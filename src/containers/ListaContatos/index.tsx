import { useSelector } from "react-redux";
import { ContactCard } from "../../components/CardContact";
import { Container } from "./style";
import { RootReducer } from "../../store";

const ListaContatos = () => {
  const { contatos } = useSelector((state: RootReducer) => state.contato);

  return (
    <Container overflow="scroll" height="60vh" justifyContent="space-between">
      <h1>Lista de Contatos</h1>
      {contatos.map((contato) => (
        <ContactCard
          nome={contato.nome}
          email={contato.email}
          numero={contato.numero}
          id={contato.id}
          key={contato.id}
        />
      ))}
    </Container>
  );
};

export default ListaContatos;
