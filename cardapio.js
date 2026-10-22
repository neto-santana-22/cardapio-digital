/*
 * DADOS DO CARDÁPIO
 * Edite este arquivo para atualizar textos, preços e disponibilidade.
 * preco: valor numérico em reais ou null para exibir "Preço a consultar".
 * disponivel: use false para marcar um item como indisponível.
 * obs: observação opcional, como "serve 2 pessoas".
 * Confirme todos os preços com o restaurante antes de publicar.
 */

const CONFIG = {
  nome: "O Praeiro",
  subtitulo: "Restaurante",
  boasVindas: "Sabor que faz cada momento especial!",
  rodape: "Aqui o sabor é caseiro e o atendimento é de coração!",
  // Informe o número oficial com código do país e DDD, somente dígitos.
  whatsapp: "",
  // Preencha apenas depois de confirmar as informações com o restaurante.
  endereco: "",
  horario: ""
};

const CATEGORIAS = [
  {
    id: "alacarte",
    nome: "Pratos à la carte",
    itens: [
      { nome: "Arrumadinho de charque", preco: 28 },
      { nome: "Arrumadinho de carne de sol", preco: 32 },
      { nome: "Parmegiana de frango", preco: 30 },
      { nome: "Parmegiana de carne", preco: 35 },
      { nome: "Mão de vaca", preco: 35 },
      { nome: "Sarapatel", preco: 30 },
      { nome: "Feijoada individual", preco: 35 },
      { nome: "Feijoada pra 2 pessoas", preco: 65 },
      { nome: "Empadão de frango", preco: 25 },
      { nome: "Empadão de camarão", preco: 35 },
      { nome: "Carne de sol", preco: 35 },
      { nome: "Carne ao molho madeira", preco: 35 },
      { nome: "Salada Cesar", preco: 25 },
      { nome: "Salada tropical", preco: 15 },
      { nome: "Salada de camarão", preco: 30 },
      { nome: "Parmegiana de camarão", preco: 45 },
      { nome: "Estrogonofe de camarão", preco: 45 },
      { nome: "Bobó de camarão", preco: 45 },
      { nome: "Camarão crocante com arroz de queijo", preco: 45 },
      { nome: "Lasanha de carne", preco: 25 }
    ]
  },
  {
    id: "compartilhar",
    nome: "Pratos pra compartilhar",
    itens: [
      { nome: "Peixada", obs: "serve 2 pessoas", preco: 100 },
      { nome: "Carne de sol", obs: "serve 2 pessoas", preco: 90 },
      { nome: "Picanha", obs: "serve 2 pessoas", preco: 110 },
      { nome: "Parmegiana de frango", obs: "serve 2 pessoas", preco: 65 },
      { nome: "Parmegiana de carne", obs: "serve 2 pessoas", preco: 80 }
    ]
  },
  {
    id: "porcoes",
    nome: "Porções e petiscos",
    itens: [
      { nome: "Caldinho", preco: 10 },
      { nome: "Batata frita", preco: 25 },
      { nome: "Calabresa com fritas", preco: 35 },
      { nome: "Camarão alho e óleo", preco: 50 },
      { nome: "Carne de sol com fritas", preco: 60 }
    ]
  },
  {
    id: "bebidas",
    nome: "Bebidas",
    itens: [
      { nome: "Suco", obs: "copo", preco: 7 },
      { nome: "Refrigerante lata", preco: 7 },
      { nome: "Refrigerante 1L", preco: 12 },
      { nome: "Cerveja", preco: null },
      { nome: "Alcatrão", preco: 10 }
    ]
  }
];
