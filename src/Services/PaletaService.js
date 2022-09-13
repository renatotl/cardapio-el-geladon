
import { Api } from "Helpers/Api";

const parseResponse = (response) => response.json();//pega toda resposta da req vira json

const transformPaleta = (paleta) => {
  const [sabor, recheio] = paleta.sabor.split(" com ");// função splite quebra uma string
  // a propriedade recheio so vai ser criada se estiver a estrutura 'com'

  return {
    ...paleta,
    id: paleta._id,// id que vem da api
    titulo: paleta.sabor,
    sabor,
    ...(recheio && { recheio }),
    possuiRecheio: Boolean(recheio),
  };
};


//faz a junçao so parseResponse com o obj transforme paleta que foi criado antes
const parseTransformLista = (response) =>
  parseResponse(response).then((paletas) => paletas.map(transformPaleta));// o map faz um mapeamento de todos os dados que estão vindo

  //codigo responsavel por pegar por id
  const parseTransformItem = (response) => parseResponse(response).then(transformPaleta);


export const PaletaService = {
  getLista: () =>
    fetch(Api.paletaLista(), { method: "GET" }).then(parseTransformLista),
  getById: (id) =>
    fetch(Api.paletaById(id), { method: "GET" }).then(parseTransformItem),
  create: () =>
    fetch(Api.createPaleta(), { method: "POST" }).then(parseResponse),
  updateById: (id) =>
    fetch(Api.updatePaletaById(id), { method: "PUT" }).then(parseResponse),
  deleteById: (id) =>
    fetch(Api.deletePaletaById(id), { method: "DELETE" }).then(parseResponse),
};
// paletaById e outras estão listadas na Api.js
// o fetch nos permite conectar com uma api  backend

