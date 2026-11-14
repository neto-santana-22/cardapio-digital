/*
 * DADOS DO CARDÁPIO
 * Edite este arquivo para atualizar textos, preços e disponibilidade.
 * preco: valor numérico em reais ou null para exibir "Preço a consultar".
 * disponivel: use false para marcar um item como indisponível.
 * obs: observação opcional, como "serve 2 pessoas".
 * aPartirDe: true mostra "a partir de" antes do preço.
 * semPreco: true mostra só o nome do item (sem pontilhado nem preço).
 * notaTopo / nota: texto opcional abaixo do título / no fim da seção.
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
    imagem: "img/alacarte.jpg",
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
    imagem: "img/compartilhar.jpg",
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
    imagem: "img/porcoes.jpg",
    nome: "Porção e Petiscos",
    itens: [
      { nome: "Caldinho", preco: 10 },
      { nome: "Batata frita", preco: 25 },
      { nome: "Calabresa com fritas", preco: 35 },
      { nome: "Camarão alho e óleo", preco: 50 },
      { nome: "Carne de sol com fritas", preco: 60 },
      { nome: "Camarão crocante", preco: 70 },
      { nome: "Posta de peixe", aPartirDe: true, preco: 80 },
      { nome: "Caldão", preco: 20 },
      { nome: "Mistão de crustáceos", obs: "posta de peixe, batata, salada, camarão", preco: 120 }
    ]
  },
  {
    id: "jantas",
    imagem: "img/jantas.jpg",
    nome: "Jantas",
    itens: [
      { nome: "Batata doce", preco: 25 },
      { nome: "Macaxeira", preco: 25 },
      { nome: "Cará", preco: 25 },
      { nome: "Sopas", preco: 20 },
      { nome: "Ovo", preco: 20 },
      { nome: "Calabresa", preco: 20 },
      { nome: "Guisado de boi", preco: 25 },
      { nome: "Galinha guisada", preco: 25 },
      { nome: "Fígado", preco: 25 },
      { nome: "Bisteca suína", preco: 25 },
      { nome: "Peixe frito", preco: 25 },
      { nome: "Carne de sol", preco: 30 },
      { nome: "Charque", preco: 30 },
      { nome: "Pão com ovo", preco: 8 },
      { nome: "Pão com queijo", preco: 10 }
    ],
    nota: "Consulte nossas opções do dia!"
  },
  {
    id: "sobremesas",
    imagem: "img/sobremesas.jpg",
    nome: "Sobremesas",
    itens: [
      { nome: "Fatia de bolo de noiva", preco: 20 },
      { nome: "Fatia de bolo de rolo massaricado com queijo do reino", preco: 15 },
      { nome: "Pudim", preco: 10 },
      { nome: "Delícia de abacaxi", preco: 12 },
      { nome: "Pavê", preco: 12 }
    ]
  },
  {
    id: "bebidas",
    imagem: "img/bebidas.jpg",
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
