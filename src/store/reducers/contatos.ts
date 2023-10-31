import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface contato {
  id: number;
  nome: string;
  email: string;
  numero: string;
}

type contatoState = {
  contatos: Array<contato>;
};

const initialState: contatoState = {
  contatos: [
    {
      id: 1,
      nome: "João de Souza da Silva",
      email: "joãosouza@gmail.com",
      numero: "(99) 9 9999-9999",
    },
    {
      id: 2,
      nome: "Marcos da Silva Braz",
      email: "marcosbraz@gmail.com",
      numero: "(88) 9 8888-8888",
    },
    {
      id: 3,
      nome: "Marcela Daiana dos Santos",
      email: "marceladai@gmail.com",
      numero: "(77) 9 7777-7777",
    },
  ],
};

const contatosSlice = createSlice({
  name: "Contatos",
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.contatos = state.contatos.filter(
        (contato) => contato.id != action.payload
      );
    },

    editar: (state, action: PayloadAction<contato>) => {
      const indexDoContato = state.contatos.findIndex(
        (t) => t.id === action.payload.id
      );

      if (indexDoContato >= 0) {
        state.contatos[indexDoContato] = action.payload;
      }
    },

    adicionar: (state, action: PayloadAction<Omit<contato, "id">>) => {
      const contatoJaExiste = state.contatos.find(
        (contato) =>
          contato.numero.toLowerCase() === action.payload.numero.toLowerCase()
      );

      if (contatoJaExiste) {
        alert("Esse número já existe!");
      } else {
        const ultimoContato = state.contatos[state.contatos.length - 1];
        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1,
        };
        state.contatos.push(contatoNovo);
      }
    },
  },
});

export const { remover, editar, adicionar } = contatosSlice.actions;
export default contatosSlice.reducer;
