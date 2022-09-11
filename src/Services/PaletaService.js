
import { Api } from "helpers/Api";

const parseResponse = (response) => response.json();//pega toda resposta da req vira json

export const PaletaService = {
  getLista: () =>
    fetch(Api.paletaLista(), { method: "GET" }).then(parseResponse),
  getById: (id) =>
    fetch(Api.paletaById(id), { method: "GET" }).then(parseResponse),
  create: () =>
    fetch(Api.createPaleta(), { method: "POST" }).then(parseResponse),
  updateById: (id) =>
    fetch(Api.updatePaletaById(id), { method: "PUT" }).then(parseResponse),
  deleteById: (id) =>
    fetch(Api.deletePaletaById(id), { method: "DELETE" }).then(parseResponse),
};
// paletaById e outras estão listadas na Api.js
// o fetch nos permite conectar com uma api  backend

