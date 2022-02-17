import { createSlice } from "@reduxjs/toolkit";

/*
 * tenemos que instalar @reduxjs/toolkit y react-redux,
 * importamos createSlice() y despues lo vamos a inicializar,
 * dandole un nombre y un estado inicial,
 * despues en el reducer va a ir las funciones que queremos que se hagan con el estado inicial
 ! dentro de accion se encuentra el payload que es la data que le pasemos, cuando ya lo
 ! estemos usando en otros archivos, le pasaremos objetos con nombre y datos como
 ! product y price
 */

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
