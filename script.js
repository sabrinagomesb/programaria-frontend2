function loadDictionary() {
  let biographies = {
    bio1: {
      name: "Marielle Franco",
      image: "https://i.postimg.cc/8fS8KSGX/marielle-franco.png",
      description:
        "Marielle Francisco da Silva, conhecida como Marielle Franco, foi uma socióloga, feminista, militante dos direitos humanos e política brasileira. Filiada ao Partido Socialismo e Liberdade (PSOL), elegeu-se vereadora do Rio de Janeiro para a Legislatura 2017-2020, durante a eleição municipal de 2016, com a quinta maior votação. Crítica da intervenção federal no Rio de Janeiro e da Polícia Militar, denunciava constantemente abusos de autoridade por parte de policiais contra moradores de comunidades carentes. Em 14 de março de 2018 foi assassinada a tiros.",
      quote:
        "Quantos mais vão precisar morrer para que essa guerra aos pobres acabe.",
    },
    bio2: {
      name: "Lélia Gonzales",
      image: "https://i.postimg.cc/2q1f3GTG/lelia-gonzalez.png",
      description:
        "Lélia Gonzalez foi uma intelectual, política, professora e antropóloga brasileira.Ajudou a fundar instituições como o Movimento Negro Unificado (MNU), o Instituto de Pesquisas das Culturas Negras (IPCN), o Coletivo de Mulheres Negras N'Zinga e o Olodum. Sua militância em defesa da mulher negra levou-a ao Conselho Nacional dos Direitos da Mulher (CNDM), no qual atuou de 1985 a 1989. Foi candidata a deputada federal pelo PT, elegendo-se primeira suplente. Nas eleições seguintes, em 1986, candidatou-se a deputada estadual pelo PDT, novamente elegendo-se suplente.",
      quote:
        "A gente não nasce negro, a gente se torna negro. É uma conquista dura, cruel e que se desenvolve pela vida da gente afora.",
    },
    bio3: {
      name: "Angela Davis",
      image: "https://i.postimg.cc/nhqh7Lcc/angela-davis.png",
      description:
        "Angela Yvonne Davis é uma professora e filósofa socialista estado-unidense que alcançou notoriedade mundial na década de 1970 como integrante do Partido Comunista dos Estados Unidos, dos Panteras Negras, por sua militância pelos direitos das mulheres e contra a discriminação social e racial nos Estados Unidos e por ser personagem de um dos mais polêmicos e famosos julgamentos criminais da recente história dos Estados Unidos.",
      quote:
        "Não aceito mais as coisas que não posso mudar, estou mudando as coisas que não posso aceitar.",
    },
    bio4: {
      name: "Conceição Evaristo",
      image: "https://i.postimg.cc/Z9XzNNMS/conceicao-evaristo.png",
      description:
        "Maria da Conceição Evaristo de Brito nasceu em Belo Horizonte, em 1946. De origem humilde, migrou para o Rio de Janeiro na década de 1970. Graduada em Letras pela UFRJ, trabalhou como professora da rede pública de ensino da capital fluminense. É Mestre em Literatura Brasileira pela PUC do Rio de Janeiro, com a dissertação Literatura Negra: uma poética de nossa afro-brasilidade (1996), e Doutora em Literatura Comparada na Universidade Federal Fluminense, com a tese Poemas malungos, cânticos irmãos (2011), na qual estuda as obras poéticas dos afro-brasileiros Nei Lopes e Edimilson de Almeida Pereira em confronto com a do angolano Agostinho Neto.",
      quote:
        "O importante não é ser o primeiro ou primeira, o importante é abrir caminhos.",
    },
    bio5: {
      name: "Carolina de Jesus",
      image:
        "https://i.postimg.cc/26FB7py2/carolina-maria-de-jesus-2-1200x900-2.jpg",
      description:
        "Carolina Maria de Jesus foi uma escritora brasileira, conhecida por seu livro Quarto de Despejo: Diário de uma Favelada publicado em 1960. Considerada uma das primeiras e mais importantes escritoras negras do Brasil. A autora viveu boa parte de sua vida na favela do Canindé, na zona norte de São Paulo, sustentando a si mesma e seus três filhos como catadora de papéis. Em 1958 tem seu diário publicado sob o nome Quarto de Despejo, com auxílio do jornalista Audálio Dantas. O livro fez um enorme sucesso e chegou a ser traduzido para quatorze línguas.",
      quote:
        "Ah, comigo o mundo vai modificar-se. Não gosto do mundo como ele é.",
    },
    bio6: {
      name: "Rosa Parks",
      image: "https://i.postimg.cc/K1q2Zw74/rosa-parks.png",
      description:
        "Rosa Louise McCauley, mais conhecida por Rosa Parks, foi uma costureira negra norte-americana. Símbolo do movimento dos direitos civis dos negros nos Estados Unidos, ficou famosa em 1º de dezembro de 1955 por ter se recusado frontalmente a ceder o seu lugar no ônibus a um branco, ato que se tornou o estopim do movimento que foi denominado boicote aos ônibus de Montgomery e posteriormente viria a marcar o início da luta antissegregacionista.",
      quote: "Você nunca deve ter medo do que está fazendo quando está certo.",
    },
  }

  for (let bio in biographies) {
    content.innerHTML +=
      '<div class="card">' +
      '<img src="' +
      biographies[bio].image +
      '" />' +
      "<details>" +
      "<summary>" +
      biographies[bio].name +
      "</summary>" +
      "<p>" +
      biographies[bio].description +
      "</p>" +
      "<blockquote> <q>" +
      biographies[bio].quote +
      "</blockquote> </q>" +
      "</details>" +
      "</div>"
  }
}

loadDictionary()
console.log(content)
