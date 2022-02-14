/*
*Vamos a crear el statdo global, e importamos el archivo donde se encuentran los tados iniciales
* y al igual que useContext debemos envolver toda la app con el Reduce para que sea global
! lo vamos a hacer en el archivo de index.js
*/

/*
*Asi lo vamos a usar
*import { Provider } from "react-redux";
*import store from "./redux/store"; 
*<React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
*</React.StrictMode>
 */
import { configureStore } from "@reduxjs/toolkit";
import cartRedux from "./cartRedux";

export default configureStore({
  reducer: {
    cart: cartRedux,
  },
});
