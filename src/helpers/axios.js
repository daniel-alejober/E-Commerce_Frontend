import axios from "axios";

/*
 *Estamos transformando el objeto de local storage a json para asi poder acceder a ellos
 *como si fuera un objeto hasta llegar al token*/
// const objectUser = JSON.parse(localStorage.getItem("persist:root"));
// const currentData = JSON.parse(objectUser.currentUser);
// const token = currentData.accessToken;

export const clienteAxiosPublic = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});
