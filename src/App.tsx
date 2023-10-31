import { Provider } from "react-redux";
import ListaContatos from "./containers/ListaContatos";
import { Global } from "./styles/global";
import store from "./store";
import { ContainerAdicionarContato } from "./containers/AdicionarContato";

function App() {
  return (
    <>
      <Provider store={store}>
        <Global />
        <ListaContatos />
        <ContainerAdicionarContato />
      </Provider>
    </>
  );
}

export default App;
