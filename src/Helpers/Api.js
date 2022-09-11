//centralizador de todas as rotas
const PaletaContext = {
  paletaEndpoint: () => `${Api.baseUrl}/paletas`,//Função utilizada para separar o recurso e módulo de paletas dentro da API
  paletaLista: () => `${PaletaContext.paletaEndpoint()}/all-paletas`,//paletaLista: Retorna a coleção de paletas a serem renderizadas em tela;

  paletaById: (id) => `${PaletaContext.paletaEndpoint()}/one-paleta/${id}`,//paletaById: Retorna uma única paleta especificada por sua propriedade id;

  createPaleta: () => `${PaletaContext.paletaEndpoint()}/create-paleta`,//createPaleta: Adiciona uma nova paleta à coleção de dados já existente, através da API;

  updatePaletaById: (id) => `${PaletaContext.paletaEndpoint()}/update-paleta/${id}`,//updatePaletaById: Atualiza uma paleta existente especificada por sua propriedade id e

  deletePaletaById: (id) => `${PaletaContext.paletaEndpoint()}/delete-paleta/${id}`,//deletePaletaById: Deleta uma paleta existente da atual coleção de dados, através da API, especificada por sua propriedade id.

};

export const Api = {
  baseUrl: "https://api-elgeladon.herokuapp.com",//baseUrl: URL Base da da aplicação, ou seja, o endereço principal de onde será executado o serviço de API/ Back end, neste caso a aplicação a ser usada para demonstrar seu uso será executada na porta 4000;
//todoas os dados da nossa api estão aqui em baixo
  ...PaletaContext,
};