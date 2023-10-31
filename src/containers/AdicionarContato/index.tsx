import { AddContactDiv } from "../../components/AddContact"
import { Container } from "../ListaContatos/style"

export const ContainerAdicionarContato = () => {
    return (
        <Container height="30vh" justifyContent="space-evenly">
            <h1>Adicione um contato</h1>
            <AddContactDiv />
        </Container>
    )
}