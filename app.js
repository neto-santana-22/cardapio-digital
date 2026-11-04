(function () {
  "use strict";

  const moedaBRL = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

  const elementos = {
    cardapio: document.getElementById("cardapio"),
    abas: document.getElementById("abas"),
    nome: document.getElementById("nomeRestaurante"),
    subtitulo: document.getElementById("subtitulo"),
    boasVindas: document.getElementById("boasVindas"),
    frase: document.getElementById("frase"),
    contato: document.getElementById("btnContato"),
    endereco: document.getElementById("endereco"),
    horario: document.getElementById("horario")
  };

  let categoriaAtiva = "todos";
  let temporizadorAviso;

  function criarElemento(tag, classe, texto) {
    const elemento = document.createElement(tag);
    if (classe) elemento.className = classe;
    if (texto !== undefined && texto !== null) elemento.textContent = texto;
    return elemento;
  }

  function criarItem(item) {
    const indisponivel = item.disponivel === false;
    const li = criarElemento("li", `item${indisponivel ? " indisponivel" : ""}`);
    const nome = criarElemento("span", "nome", item.nome);

    if (item.obs) nome.appendChild(criarElemento("span", "obs", `(${item.obs})`));
    li.appendChild(nome);
    li.appendChild(criarElemento("span", "pontos"));

    let textoPreco;
    let classePreco = "preco";

    if (indisponivel) {
      textoPreco = "Indisponível";
      li.setAttribute("aria-label", `${item.nome}, indisponível`);
    } else if (item.preco === null || item.preco === undefined) {
      textoPreco = "Preço a consultar";
      classePreco += " consultar";
    } else if (typeof item.preco === "number" && Number.isFinite(item.preco) && item.preco >= 0) {
      textoPreco = moedaBRL.format(item.preco);
    } else {
      textoPreco = "Preço não informado";
      classePreco += " consultar";
    }

    li.appendChild(criarElemento("span", classePreco, textoPreco));
    return li;
  }

  function criarCategoria(categoria) {
    const secao = criarElemento("section", "categoria");
    const tituloId = `titulo-${categoria.id}`;
    secao.id = `cat-${categoria.id}`;
    secao.setAttribute("aria-labelledby", tituloId);

    if (categoria.imagem) {
      const img = criarElemento("img", "categoria-img");
      img.src = categoria.imagem;
      img.alt = "";
      img.loading = "lazy";
      img.decoding = "async";
      secao.appendChild(img);
    }

    const titulo = criarElemento("h2", "categoria-titulo", categoria.nome);
    titulo.id = tituloId;
    secao.appendChild(titulo);

    const lista = criarElemento("ul", "lista");
    categoria.itens.forEach((item) => lista.appendChild(criarItem(item)));
    secao.appendChild(lista);
    return secao;
  }

  function renderizarCardapio() {
    const categoriasVisiveis = CATEGORIAS.filter((categoria) =>
      categoriaAtiva === "todos" || categoria.id === categoriaAtiva
    );

    elementos.cardapio.replaceChildren();
    categoriasVisiveis.forEach((categoria) => {
      elementos.cardapio.appendChild(criarCategoria(categoria));
    });
    elementos.cardapio.setAttribute("aria-busy", "false");
  }

  function atualizarAbas() {
    elementos.abas.querySelectorAll('[role="tab"]').forEach((aba) => {
      const selecionada = aba.dataset.id === categoriaAtiva;
      aba.setAttribute("aria-selected", String(selecionada));
      aba.tabIndex = selecionada ? 0 : -1;
    });
  }

  function selecionarCategoria(id) {
    categoriaAtiva = id;
    atualizarAbas();
    renderizarCardapio();
    window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }

  function criarAba(id, rotulo) {
    const botao = criarElemento("button", "aba", rotulo);
    botao.type = "button";
    botao.setAttribute("role", "tab");
    botao.setAttribute("aria-controls", "cardapio");
    botao.dataset.id = id;
    botao.addEventListener("click", () => selecionarCategoria(id));
    botao.addEventListener("keydown", (evento) => {
      if (evento.key !== "ArrowRight" && evento.key !== "ArrowLeft") return;
      evento.preventDefault();
      const abas = Array.from(elementos.abas.querySelectorAll('[role="tab"]'));
      const indice = abas.indexOf(botao);
      const direcao = evento.key === "ArrowRight" ? 1 : -1;
      const proxima = abas[(indice + direcao + abas.length) % abas.length];
      proxima.focus();
      selecionarCategoria(proxima.dataset.id);
    });
    return botao;
  }

  function configurarContato() {
    const numero = String(CONFIG.whatsapp || "").replace(/\D/g, "");
    if (numero) {
      elementos.contato.href = `https://wa.me/${numero}`;
      elementos.contato.hidden = false;
    }
  }

  function preencherTexto(elemento, valor) {
    if (!valor) return;
    elemento.textContent = valor;
    elemento.hidden = false;
  }

  function iniciar() {
    elementos.nome.textContent = CONFIG.nome;
    elementos.subtitulo.textContent = CONFIG.subtitulo.toLocaleUpperCase("pt-BR");
    elementos.boasVindas.textContent = CONFIG.boasVindas;
    elementos.frase.textContent = CONFIG.rodape;

    elementos.abas.appendChild(criarAba("todos", "Todos"));
    CATEGORIAS.forEach((categoria) => {
      elementos.abas.appendChild(criarAba(categoria.id, categoria.nome));
    });

    configurarContato();
    preencherTexto(elementos.endereco, CONFIG.endereco);
    preencherTexto(elementos.horario, CONFIG.horario);

    atualizarAbas();
    renderizarCardapio();
  }

  iniciar();
})();
