/* ===== Tipos ===== */

export interface Modulo {
  id: number;
  titulo: string;
  descricao: string;
  duracao: string;
  xp: number;
}

export interface Trilha {
  id: number;
  slug: string;
  titulo: string;
  descricaoCurta: string;
  descricaoLonga: string;
  icone: string;
  cor: string;        // cor tema do card
  totalXp: number;
  modulos: Modulo[];
}

export interface Material {
  id: number;
  titulo: string;
  tipo: "pdf" | "ebook" | "cartilha" | "infografico";
  descricao: string;
  tamanho: string;
  url: string;
  cor: string;
}

export interface Pilula {
  id: number;
  titulo: string;
  conteudo: string;
  categoria: string;
  data: string;
  cor: string;
}

export interface Evento {
  id: number;
  titulo: string;
  descricao: string;
  data: string;
  horario: string;
  local: string;
  tipo: "palestra" | "workshop" | "mesa-redonda";
}

export interface Estatistica {
  label: string;
  valor: string;
  icone: string;
  cor: string;
}

export interface Questao {
  id: number;
  pergunta: string;
  opcoes: string[];
  respostaCorreta: number;
}

export interface PostForum {
  id: number;
  autor: string;
  iniciais: string;
  data: string;
  conteudo: string;
  respostas: number;
}

export interface ConteudoModulo {
  trilhaSlug: string;
  moduloId: number;
  videoTitulo: string;
  videoDuracao: string;
  videoUrl?: string;
  conteudo: string[];
  questoes: Questao[];
  forum: PostForum[];
}

/* ===== Dados mockados ===== */

export const estatisticas: Estatistica[] = [
  { label: "Módulos disponíveis", valor: "15", icone: "BookOpen", cor: "blue" },
  { label: "Minutos de conteúdo", valor: "245", icone: "Clock", cor: "green" },
  { label: "Materiais gratuitos", valor: "4", icone: "Download", cor: "orange" },
  { label: "Eventos agendados", valor: "3", icone: "Calendar", cor: "purple" },
];

export const trilhas: Trilha[] = [
  {
    id: 1,
    slug: "seguranca-digital",
    titulo: "Segurança Digital para Todos",
    descricaoCurta:
      "Aprenda a proteger seus dados e sua privacidade no dia a dia digital.",
    descricaoLonga:
      "Nesta trilha você vai entender como funcionam as principais ameaças digitais — de golpes por e-mail a vazamentos de dados — e aprender práticas simples para se proteger.",
    icone: "ShieldCheck",
    cor: "blue",
    totalXp: 500,
    modulos: [
      {
        id: 1,
        titulo: "O que é Segurança Digital?",
        descricao:
          "Conceitos básicos sobre segurança da informação e por que ela importa para todos.",
        duracao: "15 min",
        xp: 100,
      },
      {
        id: 2,
        titulo: "Senhas Fortes e Autenticação",
        descricao:
          "Como criar senhas seguras, usar gerenciadores de senha e ativar 2FA.",
        duracao: "20 min",
        xp: 100,
      },
      {
        id: 3,
        titulo: "Golpes e Phishing",
        descricao:
          "Identifique e-mails e mensagens fraudulentas antes de cair em armadilhas.",
        duracao: "20 min",
        xp: 100,
      },
      {
        id: 4,
        titulo: "Privacidade nas Redes Sociais",
        descricao:
          "Configurações de privacidade e boas práticas para compartilhar informações online.",
        duracao: "15 min",
        xp: 100,
      },
      {
        id: 5,
        titulo: "Segurança em Wi-Fi e Dispositivos",
        descricao:
          "Cuidados ao usar redes públicas e manter celulares e computadores protegidos.",
        duracao: "15 min",
        xp: 100,
      },
    ],
  },
  {
    id: 2,
    slug: "saude-digital",
    titulo: "Saúde Digital e Bem-Estar",
    descricaoCurta:
      "Entenda como a tecnologia impacta sua saúde e crie hábitos digitais saudáveis.",
    descricaoLonga:
      "A tecnologia faz parte da nossa rotina, mas o uso excessivo pode prejudicar a saúde mental, o sono e as relações. Aprenda a equilibrar vida digital e bem-estar.",
    icone: "Heart",
    cor: "green",
    totalXp: 400,
    modulos: [
      {
        id: 1,
        titulo: "Tempo de Tela e Saúde Mental",
        descricao:
          "Os efeitos do uso prolongado de telas e como identificar sinais de alerta.",
        duracao: "15 min",
        xp: 100,
      },
      {
        id: 2,
        titulo: "Cyberbullying e Assédio Online",
        descricao:
          "Como reconhecer, prevenir e denunciar situações de violência digital.",
        duracao: "20 min",
        xp: 100,
      },
      {
        id: 3,
        titulo: "Desinformação e Fake News",
        descricao:
          "Ferramentas e técnicas para verificar informações antes de compartilhar.",
        duracao: "15 min",
        xp: 100,
      },
      {
        id: 4,
        titulo: "Equilíbrio Digital",
        descricao:
          "Estratégias práticas para reduzir o uso excessivo de redes sociais e aplicativos.",
        duracao: "15 min",
        xp: 100,
      },
    ],
  },

  {
    id: 3,
    slug: "lgpd-protecao-de-dados",
    titulo: "LGPD e Proteção de Dados Pessoais",
    descricaoCurta:
      "Entenda seus direitos e boas práticas de proteção de dados pessoais.",
    descricaoLonga:
      "Nesta trilha você vai aprender os conceitos principais da LGPD, a diferença entre dados pessoais e dados sensíveis, os princípios da lei, os direitos do titular, consentimento, compartilhamento, vazamentos e boas práticas de privacidade para o dia a dia e pequenos projetos.",
    icone: "ShieldCheck",
    cor: "purple",
    totalXp: 600,
    modulos: [
      {
        id: 1,
        titulo: "O que são dados pessoais e dados sensíveis",
        descricao:
          "Entenda a diferença entre dados pessoais, dados sensíveis, dados anonimizados e pseudonimizados.",
        duracao: "15 min",
        xp: 100,
      },
      {
        id: 2,
        titulo: "Princípios básicos da LGPD",
        descricao:
          "Conheça os princípios que orientam o tratamento correto de dados pessoais.",
        duracao: "15 min",
        xp: 100,
      },
      {
        id: 3,
        titulo: "Direitos do titular de dados",
        descricao:
          "Aprenda quais direitos a LGPD garante às pessoas sobre seus próprios dados.",
        duracao: "15 min",
        xp: 100,
      },
      {
        id: 4,
        titulo: "Consentimento, finalidade e compartilhamento de dados",
        descricao:
          "Veja quando o consentimento é necessário e como os dados podem ser compartilhados.",
        duracao: "15 min",
        xp: 100,
      },
      {
        id: 5,
        titulo: "Vazamentos de dados: como prevenir e o que fazer",
        descricao:
          "Entenda como prevenir incidentes de segurança e o que fazer em caso de vazamento.",
        duracao: "15 min",
        xp: 100,
      },
      {
        id: 6,
        titulo: "Boas práticas de privacidade para pessoas e pequenos projetos",
        descricao:
          "Veja práticas simples para proteger dados no dia a dia e em pequenos projetos.",
        duracao: "15 min",
        xp: 100,
      },
    ],
  },
];

export const materiais: Material[] = [
  {
    id: 1,
    titulo: "Cartilha de Segurança para Internet",
    tipo: "cartilha",
    descricao:
      "Guia prático com dicas essenciais de segurança para usuários de todas as idades.",
    tamanho: "2.4 MB",
    url: "/materiais/cartilha-seguranca-internet.txt",
    cor: "green",
  },
  {
    id: 2,
    titulo: "E-book: Proteja sua Vida Digital",
    tipo: "ebook",
    descricao:
      "Material completo sobre proteção de dados pessoais e privacidade online.",
    tamanho: "5.1 MB",
    url: "/materiais/ebook-proteja-vida-digital.txt",
    cor: "blue",
  },
  {
    id: 3,
    titulo: "Infográfico: Anatomia de um Golpe",
    tipo: "infografico",
    descricao:
      "Visualize passo a passo como funcionam os golpes digitais mais comuns.",
    tamanho: "1.2 MB",
    url: "/materiais/infografico-anatomia-golpe.svg",
    cor: "orange",
  },
  {
    id: 4,
    titulo: "Guia de Configuração de Privacidade",
    tipo: "pdf",
    descricao:
      "Passo a passo para configurar privacidade no WhatsApp, Instagram e Facebook.",
    tamanho: "3.8 MB",
    url: "/materiais/guia-privacidade-redes.txt",
    cor: "purple",
  },
];

export const pilulas: Pilula[] = [
  {
    id: 1,
    titulo: "Nunca repita senhas",
    conteudo:
      "Usar a mesma senha em vários sites é um dos erros mais comuns. Se um serviço for invadido, todas as suas contas ficam vulneráveis. Use um gerenciador de senhas!",
    categoria: "Senhas",
    data: "2026-03-10",
    cor: "blue",
  },
  {
    id: 2,
    titulo: "Cuidado com links encurtados",
    conteudo:
      "Links encurtados podem esconder destinos maliciosos. Antes de clicar, use ferramentas como CheckShortURL para revelar o endereço real.",
    categoria: "Phishing",
    data: "2026-03-08",
    cor: "red",
  },
  {
    id: 3,
    titulo: "Atualize seus aplicativos",
    conteudo:
      "Atualizações de software corrigem falhas de segurança. Manter apps e sistema operacional atualizados é uma das formas mais simples de se proteger.",
    categoria: "Dispositivos",
    data: "2026-03-05",
    cor: "green",
  },
  {
    id: 4,
    titulo: "Desconfie de ofertas boas demais",
    conteudo:
      "Promoções absurdas em redes sociais ou WhatsApp geralmente são golpes. Sempre verifique no site oficial da loja antes de clicar.",
    categoria: "Golpes",
    data: "2026-03-03",
    cor: "orange",
  },
];

export const eventos: Evento[] = [
  {
    id: 1,
    titulo: "Palestra: Segurança Digital na Terceira Idade",
    descricao:
      "Como idosos podem se proteger de golpes digitais e usar a internet com segurança.",
    data: "2026-04-15",
    horario: "14:00 – 16:00",
    local: "Auditório Principal — Mackenzie",
    tipo: "palestra",
  },
  {
    id: 2,
    titulo: "Workshop: Criando Senhas Seguras",
    descricao:
      "Atividade prática para aprender a criar e gerenciar senhas fortes.",
    data: "2026-04-22",
    horario: "10:00 – 12:00",
    local: "Laboratório de Informática — Bloco 3",
    tipo: "workshop",
  },
  {
    id: 3,
    titulo: "Mesa-Redonda: Saúde Mental e Tecnologia",
    descricao:
      "Debate sobre os impactos do uso excessivo de tecnologia na saúde mental dos jovens.",
    data: "2026-05-10",
    horario: "19:00 – 21:00",
    local: "Sala de Conferências — Mackenzie",
    tipo: "mesa-redonda",
  },
];

/* ===== Conteúdo dos módulos ===== */

export const conteudosModulos: ConteudoModulo[] = [
  // ===== TRILHA: Segurança Digital para Todos =====
  {
    trilhaSlug: "seguranca-digital",
    moduloId: 1,
    videoTitulo: "Introdução à Segurança Digital",
    videoDuracao: "12:34",
    videoUrl: "https://www.youtube.com/embed/bPVaOlJ6ln0",
    conteudo: [
      "Segurança digital, também conhecida como segurança da informação, é o conjunto de práticas, processos e tecnologias projetados para proteger dados, dispositivos e redes contra acessos não autorizados, ataques e danos. Em um mundo cada vez mais conectado, entender esses conceitos é fundamental para todos — não apenas para profissionais de tecnologia.",
      "Os três pilares fundamentais da segurança da informação são conhecidos como a Tríade CIA: Confidencialidade (garantir que apenas pessoas autorizadas acessem a informação), Integridade (assegurar que os dados não sejam alterados indevidamente) e Disponibilidade (manter os sistemas e dados acessíveis quando necessário).",
      "No Brasil, a Lei Geral de Proteção de Dados (LGPD) estabelece regras sobre coleta, armazenamento e compartilhamento de dados pessoais. Isso significa que empresas e organizações têm responsabilidade legal sobre seus dados, mas você também precisa fazer sua parte para proteger suas informações pessoais.",
      "Alguns exemplos de ameaças digitais comuns incluem: phishing (golpes por e-mail ou mensagem), malware (software malicioso), ransomware (sequestro de dados), vazamento de dados pessoais e engenharia social (manipulação psicológica para obter informações). Ao longo desta trilha, vamos aprender a reconhecer e nos proteger dessas ameaças.",
    ],
    questoes: [
      {
        id: 1,
        pergunta: "O que significa a sigla CIA na segurança da informação?",
        opcoes: [
          "Central Intelligence Agency",
          "Confidencialidade, Integridade e Disponibilidade",
          "Controle, Informação e Acesso",
          "Comunicação, Internet e Aplicativos",
        ],
        respostaCorreta: 1,
      },
      {
        id: 2,
        pergunta:
          "Qual é a principal lei brasileira que trata da proteção de dados pessoais?",
        opcoes: [
          "Lei Carolina Dieckmann",
          "Marco Civil da Internet",
          "Lei Geral de Proteção de Dados (LGPD)",
          "Código de Defesa do Consumidor",
        ],
        respostaCorreta: 2,
      },
      {
        id: 3,
        pergunta: "O que é engenharia social?",
        opcoes: [
          "Um tipo de formação em engenharia",
          "Uma técnica de manipulação psicológica para obter informações",
          "Um software de proteção contra vírus",
          "Uma rede social para engenheiros",
        ],
        respostaCorreta: 1,
      },
      {
        id: 4,
        pergunta:
          "Qual dos seguintes NÃO é um pilar da segurança da informação?",
        opcoes: [
          "Confidencialidade",
          "Velocidade",
          "Integridade",
          "Disponibilidade",
        ],
        respostaCorreta: 1,
      },
    ],
    forum: [
      {
        id: 1,
        autor: "Maria Santos",
        iniciais: "MS",
        data: "2026-03-08",
        conteudo:
          "Achei muito interessante a parte sobre a Tríade CIA. Na empresa onde trabalho, nunca explicaram isso de forma tão clara. Alguém sabe como posso aplicar esses conceitos no dia a dia do escritório?",
        respostas: 3,
      },
      {
        id: 2,
        autor: "João Oliveira",
        iniciais: "JO",
        data: "2026-03-07",
        conteudo:
          "Sobre a LGPD, eu tenho uma dúvida: se uma empresa vazar meus dados, quais são meus direitos? Alguém já passou por essa situação?",
        respostas: 5,
      },
      {
        id: 3,
        autor: "Ana Costa",
        iniciais: "AC",
        data: "2026-03-06",
        conteudo:
          "Minha avó quase caiu em um golpe de phishing ontem! Recebi esse curso na hora certa. Vou compartilhar o conteúdo com ela.",
        respostas: 2,
      },
    ],
  },
  {
    trilhaSlug: "seguranca-digital",
    moduloId: 2,
    videoTitulo: "Como Criar Senhas Realmente Seguras",
    videoDuracao: "15:22",
    videoUrl: "https://www.youtube.com/embed/3NjQ9b3pgIg",
    conteudo: [
      "Uma senha forte é sua primeira linha de defesa no mundo digital. Infelizmente, as senhas mais usadas no Brasil ainda são '123456', 'senha' e 'brasil'. Essas senhas podem ser quebradas por programas automatizados em menos de um segundo.",
      "Para criar uma senha segura, use pelo menos 12 caracteres combinando letras maiúsculas, minúsculas, números e símbolos. Uma técnica eficiente é criar uma frase-senha: por exemplo, 'MeuCaféDas7h@Mackenzie!' é fácil de lembrar mas muito difícil de adivinhar.",
      "Gerenciadores de senha como Bitwarden (gratuito e open source), 1Password ou LastPass armazenam todas as suas senhas de forma criptografada. Você só precisa memorizar uma senha mestra forte. Eles também geram senhas aleatórias e únicas para cada serviço.",
      "A Autenticação em Dois Fatores (2FA) adiciona uma camada extra de segurança. Mesmo que alguém descubra sua senha, precisará de um segundo fator — como um código no celular ou uma chave de segurança — para acessar sua conta. Ative o 2FA em todos os serviços que oferecem essa opção, especialmente e-mail, banco e redes sociais.",
    ],
    questoes: [
      {
        id: 1,
        pergunta: "Qual característica torna uma senha mais segura?",
        opcoes: [
          "Usar apenas números",
          "Ter pelo menos 12 caracteres com letras, números e símbolos",
          "Usar o nome de um familiar",
          "Usar a mesma senha em todos os sites",
        ],
        respostaCorreta: 1,
      },
      {
        id: 2,
        pergunta: "O que é Autenticação em Dois Fatores (2FA)?",
        opcoes: [
          "Digitar a senha duas vezes",
          "Ter duas senhas diferentes",
          "Uma camada extra de verificação além da senha",
          "Usar dois computadores diferentes",
        ],
        respostaCorreta: 2,
      },
      {
        id: 3,
        pergunta:
          "Qual é a função principal de um gerenciador de senhas?",
        opcoes: [
          "Hackear contas de outras pessoas",
          "Armazenar senhas de forma criptografada e gerar senhas fortes",
          "Enviar senhas por e-mail",
          "Remover vírus do computador",
        ],
        respostaCorreta: 1,
      },
      {
        id: 4,
        pergunta: "Qual das seguintes é a melhor prática para senhas?",
        opcoes: [
          "Anotar todas as senhas em um papel na mesa",
          "Usar a mesma senha forte em todos os sites",
          "Criar senhas únicas para cada serviço",
          "Compartilhar senhas com amigos de confiança",
        ],
        respostaCorreta: 2,
      },
    ],
    forum: [
      {
        id: 1,
        autor: "Pedro Lima",
        iniciais: "PL",
        data: "2026-03-09",
        conteudo:
          "Comecei a usar o Bitwarden depois desse módulo e estou impressionado! Já cadastrei mais de 40 senhas diferentes. Recomendo para quem ainda não usa gerenciador de senhas.",
        respostas: 7,
      },
      {
        id: 2,
        autor: "Carla Mendes",
        iniciais: "CM",
        data: "2026-03-08",
        conteudo:
          "Dúvida: se o gerenciador de senhas for hackeado, não perco todas as minhas senhas de uma vez?",
        respostas: 4,
      },
      {
        id: 3,
        autor: "Lucas Ferreira",
        iniciais: "LF",
        data: "2026-03-07",
        conteudo:
          "Ativei o 2FA no WhatsApp e no Gmail. O processo é bem simples! Vale muito a pena pela segurança extra.",
        respostas: 2,
      },
    ],
  },
  {
    trilhaSlug: "seguranca-digital",
    moduloId: 3,
    videoTitulo: "Identificando Golpes Digitais",
    videoDuracao: "18:45",
    videoUrl: "https://www.youtube.com/embed/5f2R9Q8YdXA",
    conteudo: [
      "Phishing é uma das formas mais comuns de golpe digital. O criminoso se passa por uma empresa ou pessoa conhecida para enganar a vítima e roubar dados pessoais, senhas ou dinheiro. O nome vem de 'fishing' (pescar), pois o golpista 'joga a isca' esperando que alguém morda.",
      "Os principais canais de phishing são: e-mails falsos imitando bancos ou empresas, mensagens de SMS com links suspeitos (smishing), ligações telefônicas fraudulentas (vishing), e mensagens em redes sociais ou WhatsApp com ofertas falsas ou pedidos urgentes.",
      "Para identificar um golpe, observe: erros de português ou formatação estranha, senso de urgência ('sua conta será bloqueada!'), links suspeitos (passe o mouse sobre o link para ver o URL real), remetentes desconhecidos ou com domínios estranhos, e pedidos de informações pessoais ou financeiras.",
      "Se receber uma mensagem suspeita: não clique em links, não baixe anexos, não forneça dados pessoais. Em caso de dúvida, entre em contato diretamente com a empresa pelo site oficial ou telefone que você já conhece.",
    ],
    questoes: [
      {
        id: 1,
        pergunta: "O que é phishing?",
        opcoes: [
          "Um tipo de vírus de computador",
          "Uma técnica de golpe que tenta enganar pessoas para obter dados",
          "Um programa de proteção antivírus",
          "Uma rede social segura",
        ],
        respostaCorreta: 1,
      },
      {
        id: 2,
        pergunta: "Qual é um sinal comum de e-mail de phishing?",
        opcoes: [
          "O e-mail vem do endereço oficial da empresa",
          "O e-mail contém erros de português e senso de urgência",
          "O e-mail foi enviado no horário comercial",
          "O e-mail contém apenas texto, sem links",
        ],
        respostaCorreta: 1,
      },
      {
        id: 3,
        pergunta:
          "O que fazer ao receber uma mensagem suspeita do banco?",
        opcoes: [
          "Clicar no link e verificar sua conta",
          "Responder com seus dados para confirmar",
          "Ligar para o número oficial do banco para verificar",
          "Encaminhar para amigos perguntando se é verdade",
        ],
        respostaCorreta: 2,
      },
    ],
    forum: [
      {
        id: 1,
        autor: "Roberto Alves",
        iniciais: "RA",
        data: "2026-03-09",
        conteudo:
          "Recebi um e-mail do 'Banco do Brasil' pedindo atualização cadastral. Quase cliquei, mas notei que o remetente era banco.brasil@gmail.com — claramente falso! Obrigado pelo módulo!",
        respostas: 6,
      },
      {
        id: 2,
        autor: "Fernanda Silva",
        iniciais: "FS",
        data: "2026-03-08",
        conteudo:
          "Minha mãe recebeu uma ligação de alguém se passando pelo suporte da Apple dizendo que o iPhone dela estava hackeado. Consegui orientá-la a desligar graças ao que aprendi aqui.",
        respostas: 4,
      },
    ],
  },
  {
    trilhaSlug: "seguranca-digital",
    moduloId: 4,
    videoTitulo: "Configurando sua Privacidade Online",
    videoDuracao: "14:10",
    videoUrl: "https://www.youtube.com/embed/9e2NfYb8kVc",
    conteudo: [
      "Redes sociais são parte importante da nossa vida, mas compartilhar informações em excesso pode colocar sua segurança em risco. Criminosos podem usar dados públicos como localização, rotina, nome de familiares e data de nascimento para aplicar golpes ou até planejar crimes.",
      "No Instagram, ative o perfil privado em Configurações > Privacidade > Conta privada. No Facebook, revise quem pode ver suas publicações em Configurações > Privacidade. No WhatsApp, configure quem pode ver sua foto de perfil, status e 'visto por último' em Configurações > Privacidade.",
      "Evite compartilhar: localização em tempo real, fotos de documentos, rotina detalhada (horários de saída e chegada), viagens enquanto ainda está fora de casa, e informações financeiras. Lembre-se: uma vez publicado na internet, é muito difícil remover completamente.",
      "Revise periodicamente as permissões dos aplicativos no seu celular. Muitos apps pedem acesso a câmera, microfone, contatos e localização sem necessidade real. No Android, vá em Configurações > Apps > Permissões. No iPhone, em Ajustes > Privacidade.",
    ],
    questoes: [
      {
        id: 1,
        pergunta:
          "Por que é arriscado compartilhar sua localização em tempo real?",
        opcoes: [
          "Consome muita bateria do celular",
          "Criminosos podem monitorar sua rotina e localização",
          "Deixa o celular mais lento",
          "Não há risco nenhum",
        ],
        respostaCorreta: 1,
      },
      {
        id: 2,
        pergunta:
          "O que é recomendado fazer periodicamente com os aplicativos do celular?",
        opcoes: [
          "Desinstalar todos os aplicativos",
          "Revisar as permissões de acesso (câmera, microfone, localização)",
          "Compartilhar senhas dos apps com familiares",
          "Usar apenas aplicativos pagos",
        ],
        respostaCorreta: 1,
      },
      {
        id: 3,
        pergunta:
          "Qual informação você deve evitar compartilhar nas redes sociais?",
        opcoes: [
          "Suas opiniões sobre filmes",
          "Fotos de viagem enquanto ainda está viajando",
          "Receitas culinárias que você experimentou",
          "Recomendações de livros",
        ],
        respostaCorreta: 1,
      },
    ],
    forum: [
      {
        id: 1,
        autor: "Juliana Rocha",
        iniciais: "JR",
        data: "2026-03-09",
        conteudo:
          "Fiz uma limpeza nas permissões dos apps e fiquei chocada! Um app de lanterna tinha acesso aos meus contatos e microfone. Já removi.",
        respostas: 8,
      },
      {
        id: 2,
        autor: "Marcos Teixeira",
        iniciais: "MT",
        data: "2026-03-08",
        conteudo:
          "Dica: no Instagram Stories, dá pra restringir quem vê seus stories em 'Melhores Amigos'. Uso para compartilhar coisas pessoais só com pessoas próximas.",
        respostas: 3,
      },
    ],
  },
  {
    trilhaSlug: "seguranca-digital",
    moduloId: 5,
    videoTitulo: "Protegendo seus Dispositivos e Conexões",
    videoDuracao: "16:28",
    videoUrl: "https://www.youtube.com/embed/VNw2f8Y3R3E",
    conteudo: [
      "Redes Wi-Fi públicas (em cafés, aeroportos, shoppings) são convenientes, mas podem ser perigosas. Criminosos podem criar redes falsas com nomes similares a redes legítimas ou interceptar dados transmitidos em redes sem criptografia adequada.",
      "Para se proteger em redes públicas: evite acessar bancos ou fazer compras online, use uma VPN (Virtual Private Network) para criptografar sua conexão, verifique se os sites acessados usam HTTPS (cadeado no navegador) e desative o Wi-Fi automático no celular.",
      "Mantenha seus dispositivos protegidos: atualize o sistema operacional e aplicativos regularmente (as atualizações corrigem falhas de segurança), use antivírus atualizado, ative a criptografia de disco (BitLocker no Windows, FileVault no Mac) e configure bloqueio de tela com PIN ou biometria.",
      "Em caso de perda ou roubo do celular: tenha o recurso 'Encontrar Meu Dispositivo' ativado previamente (Find My iPhone ou Encontrar Meu Dispositivo do Google), anote o IMEI do aparelho (digite *#06# para descobrir) e faça backups regulares dos seus dados na nuvem ou em dispositivo externo.",
    ],
    questoes: [
      {
        id: 1,
        pergunta: "Por que redes Wi-Fi públicas podem ser perigosas?",
        opcoes: [
          "Porque são mais lentas",
          "Porque criminosos podem interceptar dados ou criar redes falsas",
          "Porque gastam mais bateria",
          "Porque exigem cadastro",
        ],
        respostaCorreta: 1,
      },
      {
        id: 2,
        pergunta: "O que é uma VPN?",
        opcoes: [
          "Um tipo de vírus",
          "Uma rede virtual que criptografa sua conexão de internet",
          "Um aplicativo de mensagens seguras",
          "Um navegador de internet",
        ],
        respostaCorreta: 1,
      },
      {
        id: 3,
        pergunta:
          "O que você deve fazer imediatamente ao perder o celular?",
        opcoes: [
          "Esperar para ver se alguém devolve",
          "Usar o recurso 'Encontrar Meu Dispositivo' e bloquear remotamente",
          "Comprar um celular novo",
          "Avisar nas redes sociais",
        ],
        respostaCorreta: 1,
      },
    ],
    forum: [
      {
        id: 1,
        autor: "Paula Nascimento",
        iniciais: "PN",
        data: "2026-03-09",
        conteudo:
          "Comecei a usar VPN no celular quando estou na faculdade e percebi que vários sites bloqueiam. Alguém tem recomendação de VPN gratuita e confiável?",
        respostas: 5,
      },
      {
        id: 2,
        autor: "Eduardo Martins",
        iniciais: "EM",
        data: "2026-03-07",
        conteudo:
          "Dica importante: salvem o IMEI do celular em algum lugar seguro ANTES de precisar. Quando roubam, já é tarde para descobrir.",
        respostas: 3,
      },
    ],
  },

  // ===== TRILHA: Saúde Digital e Bem-Estar =====
  {
    trilhaSlug: "saude-digital",
    moduloId: 1,
    videoTitulo: "Impactos do Tempo de Tela na Saúde",
    videoDuracao: "13:15",
    videoUrl: "https://www.youtube.com/embed/2fLz2bNn9bI",
    conteudo: [
      "Brasileiros passam em média mais de 9 horas por dia conectados à internet — um dos maiores índices do mundo. O uso excessivo de telas está associado a problemas como insônia, ansiedade, depressão, dores de cabeça e problemas posturais.",
      "A luz azul emitida por telas pode interferir na produção de melatonina, o hormônio do sono. Especialistas recomendam evitar telas pelo menos 1 hora antes de dormir. Ative o filtro de luz azul (modo noturno) no celular e computador para reduzir esse impacto.",
      "As redes sociais são projetadas para maximizar o tempo de uso. Recursos como scroll infinito, notificações push e likes ativam o sistema de recompensa do cérebro, criando hábitos compulsivos. Reconhecer esses mecanismos é o primeiro passo para um uso mais consciente.",
      "Sinais de alerta para o uso excessivo incluem: verificar o celular compulsivamente, sentir ansiedade ao ficar sem internet, negligenciar atividades presenciais, dificuldade de concentração em tarefas offline e alterações no sono. Se você se identificou, não se preocupe — nos próximos módulos veremos estratégias práticas.",
    ],
    questoes: [
      {
        id: 1,
        pergunta: "Como a luz azul das telas afeta o sono?",
        opcoes: [
          "Ajuda a dormir mais rápido",
          "Interfere na produção de melatonina",
          "Não tem nenhum efeito no sono",
          "Aumenta a produção de serotonina",
        ],
        respostaCorreta: 1,
      },
      {
        id: 2,
        pergunta: "Qual é a recomendação sobre telas antes de dormir?",
        opcoes: [
          "Usar normalmente até adormecer",
          "Evitar telas pelo menos 1 hora antes de dormir",
          "Usar apenas o celular, não o computador",
          "Aumentar o brilho para cansar os olhos mais rápido",
        ],
        respostaCorreta: 1,
      },
      {
        id: 3,
        pergunta: "O que é scroll infinito e por que é preocupante?",
        opcoes: [
          "Um recurso que melhora a velocidade da internet",
          "Um design que mantém o usuário rolando sem fim, maximizando tempo de uso",
          "Uma proteção contra vírus",
          "Um tipo de jogo online",
        ],
        respostaCorreta: 1,
      },
    ],
    forum: [
      {
        id: 1,
        autor: "Beatriz Souza",
        iniciais: "BS",
        data: "2026-03-09",
        conteudo:
          "Instalei o app 'Bem-Estar Digital' no Android e levei um susto: estava usando o celular 6 horas por dia! Agora coloquei limites de tempo nos apps de redes sociais.",
        respostas: 4,
      },
      {
        id: 2,
        autor: "Rafael Gomes",
        iniciais: "RG",
        data: "2026-03-08",
        conteudo:
          "Comecei a carregar o celular fora do quarto para não ficar mexendo antes de dormir. Meu sono melhorou muito em apenas uma semana!",
        respostas: 6,
      },
    ],
  },
  {
    trilhaSlug: "saude-digital",
    moduloId: 2,
    videoTitulo: "Combatendo o Cyberbullying",
    videoDuracao: "17:30",
    videoUrl: "https://www.youtube.com/embed/pk2Va1T7b3Q",
    conteudo: [
      "Cyberbullying é o uso de tecnologia para intimidar, humilhar ou ameaçar alguém de forma repetida. Diferente do bullying presencial, o cyberbullying pode acontecer 24 horas por dia e alcançar um público muito maior. As vítimas frequentemente sentem que não há escapatória.",
      "As formas mais comuns incluem: mensagens ofensivas ou ameaçadoras, divulgação de fotos ou vídeos sem consentimento, criação de perfis falsos para difamar, exclusão intencional de grupos online e compartilhamento de rumores ou informações privadas.",
      "Se você for vítima: não responda às provocações, salve todas as evidências (prints de tela), bloqueie e denuncie o agressor na plataforma, converse com alguém de confiança (familiar, amigo, professor) e, em casos graves, registre um Boletim de Ocorrência. O cyberbullying é crime previsto no Código Penal brasileiro.",
      "Para ajudar a combater o cyberbullying: não compartilhe conteúdo que humilhe outras pessoas, apoie quem está sendo atacado, denuncie comportamentos abusivos nas plataformas e converse com crianças e adolescentes sobre o tema.",
    ],
    questoes: [
      {
        id: 1,
        pergunta:
          "O que diferencia o cyberbullying do bullying presencial?",
        opcoes: [
          "O cyberbullying é menos grave",
          "O cyberbullying pode acontecer 24h e alcançar um público maior",
          "O cyberbullying só acontece entre adultos",
          "Não há diferença entre os dois",
        ],
        respostaCorreta: 1,
      },
      {
        id: 2,
        pergunta: "O que fazer ao ser vítima de cyberbullying?",
        opcoes: [
          "Responder com mensagens ofensivas",
          "Salvar evidências, bloquear, denunciar e buscar apoio",
          "Deletar todas as mensagens e ignorar",
          "Criar um perfil falso para se vingar",
        ],
        respostaCorreta: 1,
      },
      {
        id: 3,
        pergunta: "Cyberbullying é crime no Brasil?",
        opcoes: [
          "Não, é apenas uma brincadeira",
          "Só é crime se envolver dinheiro",
          "Sim, é previsto no Código Penal",
          "Só é crime contra menores de idade",
        ],
        respostaCorreta: 2,
      },
    ],
    forum: [
      {
        id: 1,
        autor: "Camila Araújo",
        iniciais: "CA",
        data: "2026-03-09",
        conteudo:
          "Esse módulo deveria ser obrigatório nas escolas! Quando eu tinha 14 anos sofri cyberbullying e não sabia que podia denunciar. Hoje as informações estão mais acessíveis.",
        respostas: 9,
      },
      {
        id: 2,
        autor: "Felipe Santos",
        iniciais: "FS",
        data: "2026-03-07",
        conteudo:
          "Sou professor e vou usar esse conteúdo nas minhas aulas. Muito bem organizado e com informações práticas. Obrigado!",
        respostas: 3,
      },
    ],
  },
  {
    trilhaSlug: "saude-digital",
    moduloId: 3,
    videoTitulo: "Como Verificar Informações Online",
    videoDuracao: "14:55",
    videoUrl: "https://www.youtube.com/embed/sJ6P6A5A8hE",
    conteudo: [
      "Desinformação é a disseminação intencional de informações falsas ou enganosas. As fake news se espalham rapidamente porque apelam para emoções fortes como medo, raiva e indignação. Estudos mostram que notícias falsas se espalham até 6 vezes mais rápido que as verdadeiras nas redes sociais.",
      "Para verificar uma informação antes de compartilhar, use a técnica SIFT: Stop (pare antes de reagir), Investigate the source (investigue a fonte), Find better coverage (busque cobertura em outras fontes confiáveis) e Trace claims (rastreie a origem da informação).",
      "Ferramentas úteis para checagem de fatos: Agência Lupa, Aos Fatos, Boatos.org, e o recurso de busca reversa de imagens do Google (para verificar se uma foto é real ou manipulada). Sempre desconfie de informações que causam uma reação emocional muito forte.",
      "Dicas práticas: verifique a data da publicação (pode ser antiga sendo compartilhada como nova), leia além do título (manchetes sensacionalistas nem sempre refletem o conteúdo), confirme em pelo menos duas fontes confiáveis e desconfie de sites que não identificam seus autores ou fontes.",
    ],
    questoes: [
      {
        id: 1,
        pergunta: "Por que fake news se espalham tão rápido?",
        opcoes: [
          "Porque são bem escritas",
          "Porque apelam para emoções fortes como medo e raiva",
          "Porque são verdadeiras",
          "Porque são compartilhadas por jornalistas",
        ],
        respostaCorreta: 1,
      },
      {
        id: 2,
        pergunta: "O que significa o 'S' na técnica SIFT?",
        opcoes: [
          "Share (compartilhar)",
          "Stop (parar antes de reagir)",
          "Search (pesquisar)",
          "Send (enviar)",
        ],
        respostaCorreta: 1,
      },
      {
        id: 3,
        pergunta:
          "Qual ferramenta pode ser usada para verificar se uma foto é verdadeira?",
        opcoes: [
          "WhatsApp",
          "Busca reversa de imagens do Google",
          "Instagram",
          "Paint",
        ],
        respostaCorreta: 1,
      },
    ],
    forum: [
      {
        id: 1,
        autor: "Lúcia Pereira",
        iniciais: "LP",
        data: "2026-03-09",
        conteudo:
          "A técnica SIFT é incrível! Já usei duas vezes essa semana para não compartilhar fake news no grupo da família no WhatsApp.",
        respostas: 5,
      },
      {
        id: 2,
        autor: "Diego Correia",
        iniciais: "DC",
        data: "2026-03-08",
        conteudo:
          "Não conhecia o Agência Lupa. Virou meu site favorito para verificar informações antes de passar adiante. Valeu pela dica!",
        respostas: 2,
      },
    ],
  },
  {
    trilhaSlug: "saude-digital",
    moduloId: 4,
    videoTitulo: "Criando Hábitos Digitais Saudáveis",
    videoDuracao: "11:40",
    videoUrl: "https://www.youtube.com/embed/7M2B2LQf9nU",
    conteudo: [
      "O equilíbrio digital não significa abandonar a tecnologia, mas sim usá-la de forma intencional e consciente. O objetivo é que a tecnologia trabalhe a seu favor, não contra sua saúde e bem-estar.",
      "Dicas práticas para reduzir o uso excessivo: ative os relatórios de tempo de tela (Bem-Estar Digital no Android, Tempo de Uso no iPhone), defina limites diários para apps de redes sociais, desative notificações não essenciais, remova apps das telas iniciais e estabeleça 'zonas livres de tela' (como na mesa de jantar).",
      "A técnica Pomodoro pode ajudar: trabalhe focado por 25 minutos sem verificar o celular, depois faça uma pausa de 5 minutos. A cada 4 ciclos, faça uma pausa mais longa de 15-30 minutos. Isso melhora a produtividade e reduz o uso compulsivo do celular.",
      "Substitua hábitos digitais por atividades offline: em vez de rolar redes sociais antes de dormir, leia um livro; em vez de comer olhando o celular, pratique atenção plena; em vez de enviar mensagem, ligue ou encontre a pessoa pessoalmente. Pequenas mudanças fazem grande diferença ao longo do tempo.",
    ],
    questoes: [
      {
        id: 1,
        pergunta: "O que é equilíbrio digital?",
        opcoes: [
          "Não usar tecnologia nunca",
          "Usar tecnologia de forma intencional e consciente",
          "Usar o celular poucas vezes por semana",
          "Ter somente um dispositivo eletrônico",
        ],
        respostaCorreta: 1,
      },
      {
        id: 2,
        pergunta: "O que é a técnica Pomodoro?",
        opcoes: [
          "Uma dieta digital",
          "Trabalhar focado por 25 min e pausar 5 min, em ciclos",
          "Um app de meditação",
          "Uma técnica para usar menos o celular à noite",
        ],
        respostaCorreta: 1,
      },
      {
        id: 3,
        pergunta: "Qual é uma 'zona livre de tela' recomendada?",
        opcoes: [
          "O escritório",
          "A mesa de jantar",
          "O ônibus",
          "A sala de espera",
        ],
        respostaCorreta: 1,
      },
    ],
    forum: [
      {
        id: 1,
        autor: "Isabela Nunes",
        iniciais: "IN",
        data: "2026-03-09",
        conteudo:
          "Implementei a 'zona livre de tela' na hora do jantar com a família. No começo foi difícil, mas agora as conversas são muito melhores! Alguém mais experimentou?",
        respostas: 7,
      },
      {
        id: 2,
        autor: "Thiago Barros",
        iniciais: "TB",
        data: "2026-03-08",
        conteudo:
          "A técnica Pomodoro mudou minha vida na faculdade. Minha produtividade aumentou muito e diminuí o tempo no celular durante os estudos.",
        respostas: 4,
      },
    ],
  },

// ===== TRILHA: LGPD e Proteção de Dados Pessoais =====
 {
   trilhaSlug: "lgpd-protecao-de-dados",
   moduloId: 1,
   videoTitulo: "O que são dados pessoais e dados sensíveis",
   videoDuracao: "15:00",
   conteudo: [
     "Quase tudo o que você faz hoje deixa um rastro de informação: o nome que você digita num cadastro, a foto que você publica, o lugar de onde acessa um aplicativo. Boa parte desse rastro é formada por dados pessoais — e é exatamente isso que a Lei Geral de Proteção de Dados (LGPD) protege.",
     "Para a LGPD, dado pessoal é qualquer informação relacionada a uma pessoa que esteja identificada ou que possa ser identificada. Não é só o nome: é o conjunto de informações que, sozinhas ou combinadas, permitem chegar até você. Exemplos comuns: nome completo, CPF, RG, e-mail, telefone, endereço, foto, voz, localização, endereço de IP, cookies e hábitos de consumo.",
     "Mesmo informações que parecem soltas podem virar um dado pessoal quando combinadas. Saber apenas uma pessoa de 17 anos não identifica ninguém; mas uma estudante de 17 anos, do bairro X, que joga vôlei na escola Y pode apontar para uma única pessoa.",
     "Existe um grupo de dados que merece cuidado redobrado, porque seu uso indevido pode levar a discriminação ou a danos sérios. A LGPD chama esses dados de sensíveis: informações sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, saúde ou vida sexual, e dado genético ou biométrico, quando vinculado a uma pessoa.",
     "Quando uma informação é tratada de modo que não seja mais possível identificar a pessoa — e essa identificação não possa ser desfeita com meios razoáveis — ela é considerada um dado anonimizado e, em regra, sai da proteção da LGPD. O cuidado é que muitas bases apenas mascaram os dados (pseudonimização), e aí ainda é possível reidentificar a pessoa: nesse caso, continua sendo dado pessoal.",
   ],
   questoes: [
     {
       id: 1,
       pergunta: "Qual das alternativas apresenta apenas exemplos de dados pessoais?",
       opcoes: [
         "Temperatura média da cidade e cotação do dólar",
         "Nome completo, CPF e endereço de e-mail",
         "Número de habitantes de um país",
         "Preço de um produto numa loja",
       ],
       respostaCorreta: 1,
     },
     {
       id: 2,
       pergunta: "Segundo a LGPD, qual destes é um dado pessoal sensível?",
       opcoes: [
         "A marca do celular da pessoa",
         "A cor preferida da pessoa",
         "A convicção religiosa da pessoa",
         "O nome da rua onde a pessoa mora",
       ],
       respostaCorreta: 2,
     },
     {
       id: 3,
       pergunta: "Um dado anonimizado, em regra:",
       opcoes: [
         "Continua sendo protegido como dado sensível para sempre",
         "Deixa de identificar a pessoa e, em regra, sai da proteção da LGPD",
         "Pode ser revendido livremente sem qualquer cuidado",
         "É o mesmo que apenas esconder o nome num arquivo",
       ],
       respostaCorreta: 1,
     },
     {
       id: 4,
       pergunta:
         "Por que a combinação de informações sobre uma pessoa pode ser um dado pessoal mesmo sem o nome?",
       opcoes: [
         "Porque idade nunca é considerada dado pessoal",
         "Porque, mesmo sem o nome, o conjunto pode apontar para uma única pessoa",
         "Porque só vira dado pessoal se incluir o CPF",
         "Porque informações sobre esporte são sempre sensíveis",
       ],
       respostaCorreta: 1,
     },
     {
       id: 5,
       pergunta:
         "Qual destes é um exemplo de dado pessoal mesmo sem conter o nome da pessoa?",
       opcoes: [
         "A cotação do dólar do dia",
         "O endereço de IP e os cookies do aparelho usado por alguém",
         "A população total de uma cidade",
         "A temperatura média mensal",
       ],
       respostaCorreta: 1,
     },
   ],
   forum: [],
 },
 {
   trilhaSlug: "lgpd-protecao-de-dados",
   moduloId: 2,
   videoTitulo: "Princípios básicos da LGPD",
   videoDuracao: "15:00",
   conteudo: [
     "A LGPD não é só uma lista de proibições. Ela parte de uma ideia central: quem coleta e usa dados de outras pessoas (a lei chama esse uso de tratamento) deve agir com boa-fé e seguir um conjunto de princípios. Esses princípios funcionam como uma bússola — quando bater a dúvida se algo é certo, é a eles que recorremos.",
     "Finalidade: os dados só podem ser usados para um propósito claro, legítimo e informado à pessoa. Adequação: o uso dos dados precisa combinar com a finalidade informada. Necessidade: colete o mínimo necessário. Livre acesso: a pessoa pode consultar de forma fácil e gratuita quais dados existem sobre ela.",
     "Qualidade dos dados: os dados devem ser exatos, claros e atualizados. Transparência: a pessoa tem direito a informações claras sobre quem trata seus dados. Segurança: é preciso adotar medidas técnicas e organizacionais para proteger os dados. Prevenção: melhor evitar o problema do que remediar.",
     "Não discriminação: os dados não podem ser usados para fins discriminatórios ilícitos ou abusivos. Responsabilização e prestação de contas: quem trata os dados precisa conseguir demonstrar que adotou boas práticas — não basta dizer que protege, é preciso comprovar.",
     "Na prática, antes de pedir qualquer dado, faça três perguntas: para que eu preciso disso? Estou pedindo só o necessário? A pessoa sabe e concordou com esse uso? Se a resposta a alguma delas for não, é hora de repensar.",
   ],
   questoes: [
     {
       id: 1,
       pergunta:
         "Uma loja pede o CPF do cliente apenas para emitir um cupom de desconto que não exige identificação fiscal. Qual princípio está sendo desrespeitado?",
       opcoes: [
         "Necessidade, pois coleta mais dados do que precisa",
         "Segurança, pois não criptografou o dado",
         "Não discriminação, pois recusou atendimento",
         "Livre acesso, pois escondeu a política de privacidade",
       ],
       respostaCorreta: 0,
     },
     {
       id: 2,
       pergunta: "O princípio da transparência garante que a pessoa:",
       opcoes: [
         "Nunca poderá ter seus dados compartilhados",
         "Receba informações claras sobre como e por quem seus dados são tratados",
         "Tenha que pagar para acessar seus próprios dados",
         "Seja obrigada a aceitar todos os usos propostos",
       ],
       respostaCorreta: 1,
     },
     {
       id: 3,
       pergunta:
         "Não basta proteger os dados; é preciso demonstrar que se adotou boas práticas. Essa ideia corresponde ao princípio de:",
       opcoes: [
         "Finalidade",
         "Qualidade dos dados",
         "Responsabilização e prestação de contas",
         "Adequação",
       ],
       respostaCorreta: 2,
     },
     {
       id: 4,
       pergunta:
         "Um cadastro mantém o telefone antigo de um cliente, já desativado, e por isso ele deixa de receber avisos importantes. Qual princípio foi falho?",
       opcoes: [
         "Qualidade dos dados, pois a informação está desatualizada",
         "Não discriminação",
         "Portabilidade",
         "Livre acesso",
       ],
       respostaCorreta: 0,
     },
     {
       id: 5,
       pergunta: "O princípio da finalidade determina que os dados sejam usados:",
       opcoes: [
         "Para qualquer propósito que surgir no futuro",
         "Apenas para propósitos legítimos, específicos e informados ao titular",
         "Somente por empresas de grande porte",
         "Sem necessidade de avisar a pessoa",
       ],
       respostaCorreta: 1,
     },
   ],
   forum: [],
 },
 {
   trilhaSlug: "lgpd-protecao-de-dados",
   moduloId: 3,
   videoTitulo: "Direitos do titular de dados",
   videoDuracao: "15:00",
   conteudo: [
     "Na linguagem da LGPD, a pessoa a quem os dados se referem é chamada de titular. Quem decide como os dados serão usados é o controlador, e quem trata os dados em nome do controlador é o operador. O ponto central é: ao permitir que usem seus dados, você nunca deixa de ser o dono deles.",
     "A qualquer momento, e mediante pedido, o titular pode solicitar: confirmação de que seus dados são tratados; acesso aos dados; correção de dados incompletos, inexatos ou desatualizados; anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos; e portabilidade dos dados a outro fornecedor de serviço.",
     "O titular também pode pedir a eliminação dos dados tratados com base no consentimento, informação sobre com quem seus dados foram compartilhados, informação sobre o consentimento e suas consequências, a revogação do consentimento e a revisão de decisões tomadas apenas por sistemas automatizados.",
     "O pedido costuma ser feito diretamente ao serviço ou empresa, normalmente pelo canal de atendimento ou pelo encarregado de proteção de dados (também chamado de DPO). O atendimento ao titular deve ser gratuito. Se o pedido não for respeitado, é possível registrar reclamação junto a órgãos de defesa do consumidor e à Autoridade Nacional de Proteção de Dados (ANPD).",
     "Dica de cidadania digital: procure a Política de Privacidade do serviço. É lá que costuma estar o e-mail ou formulário do encarregado de dados, o caminho mais rápido para exercer seus direitos.",
   ],
   questoes: [
     {
       id: 1,
       pergunta:
         "Maria descobriu que seu endereço cadastrado num site está errado. Qual direito ela exerce ao pedir a atualização?",
       opcoes: ["Portabilidade", "Correção", "Revisão de decisão automatizada", "Eliminação"],
       respostaCorreta: 1,
     },
     {
       id: 2,
       pergunta: "O direito de portabilidade permite ao titular:",
       opcoes: [
         "Apagar todos os seus dados de uma vez",
         "Levar seus dados para outro fornecedor de serviço",
         "Impedir qualquer coleta de dados no futuro",
         "Receber dinheiro pelos seus dados",
       ],
       respostaCorreta: 1,
     },
     {
       id: 3,
       pergunta: "Se um serviço se recusa a atender um pedido legítimo do titular, ele pode:",
       opcoes: [
         "Nada pode ser feito, a decisão é final",
         "Apenas processar a empresa, sem outra alternativa",
         "Registrar reclamação em órgãos de defesa do consumidor e na ANPD",
         "Exigir o fechamento imediato da empresa",
       ],
       respostaCorreta: 2,
     },
     {
       id: 4,
       pergunta: "Na linguagem da LGPD, quem é o titular dos dados?",
       opcoes: [
         "A empresa que decide como os dados serão usados",
         "A pessoa a quem os dados se referem",
         "O órgão que fiscaliza o cumprimento da lei",
         "Quem trata os dados em nome de outra empresa",
       ],
       respostaCorreta: 1,
     },
     {
       id: 5,
       pergunta:
         "Um banco recusa automaticamente um pedido de crédito apenas por um sistema, sem análise humana. Que direito o titular pode exercer?",
       opcoes: [
         "Portabilidade",
         "Revisão de decisões automatizadas",
         "Anonimização",
         "Informação sobre compartilhamento",
       ],
       respostaCorreta: 1,
     },
   ],
   forum: [],
 },
 {
   trilhaSlug: "lgpd-protecao-de-dados",
   moduloId: 4,
   videoTitulo: "Consentimento, finalidade e compartilhamento de dados",
   videoDuracao: "15:00",
   conteudo: [
     "Muita gente pensa que toda coleta de dados depende de um sim explícito. Na verdade, a LGPD prevê várias situações (chamadas de bases legais) em que o uso de dados é permitido. O consentimento é uma delas — importante, mas não a única. Cumprir contrato, obrigação legal, proteção da vida e legítimo interesse são outros exemplos.",
     "Quando o uso dos dados se apoia no consentimento, ele precisa ser livre (sem pressão), informado (a pessoa entende para que concorda), inequívoco (uma manifestação clara, não uma caixinha já marcada) e específico (vale para a finalidade indicada, não para qualquer uso futuro). E o consentimento pode ser retirado a qualquer momento, de forma simples e gratuita.",
     "Toda coleta deve ter uma finalidade definida e informada. Isso evita o uso guarda-tudo, em que a empresa acumula dados sem saber exatamente para quê. Se a finalidade muda de forma incompatível com a original, é preciso informar a pessoa e, em muitos casos, pedir novo consentimento.",
     "Compartilhar dados com outras empresas ou parceiros é possível, mas não pode ser feito às escondidas. O titular tem o direito de saber com quem seus dados são compartilhados, e o compartilhamento precisa respeitar a finalidade informada e as bases legais. Desconfie de serviços gratuitos cujo modelo de negócio depende de repassar seus dados sem deixar isso claro.",
     "Antes de clicar em Aceitar, verifique para que os dados serão usados, se há compartilhamento com terceiros e como revogar a autorização depois. Termos longos não significam que você abriu mão dos seus direitos. Para dados sensíveis, a lei exige um consentimento ainda mais destacado e específico.",
   ],
   questoes: [
     {
       id: 1,
       pergunta: "Sobre o consentimento na LGPD, é correto afirmar que ele:",
       opcoes: [
         "É a única forma de usar dados pessoais legalmente",
         "Uma vez dado, nunca mais pode ser retirado",
         "Pode ser revogado a qualquer momento, de forma simples e gratuita",
         "Pode ser presumido por uma caixinha já marcada",
       ],
       respostaCorreta: 2,
     },
     {
       id: 2,
       pergunta:
         "Um aplicativo coletou dados para melhorar o serviço e depois passou a vendê-los para anunciantes sem avisar. Qual ideia foi violada?",
       opcoes: [
         "A finalidade informada ao titular",
         "O direito de portabilidade",
         "A regra de idade mínima",
         "O princípio da não discriminação apenas",
       ],
       respostaCorreta: 0,
     },
     {
       id: 3,
       pergunta: "Para o tratamento de dados sensíveis, a LGPD exige:",
       opcoes: [
         "Nenhum cuidado adicional",
         "Apenas um aviso no rodapé do site",
         "Consentimento destacado e específico, ou outra hipótese legal própria",
         "Pagamento de uma taxa à ANPD",
       ],
       respostaCorreta: 2,
     },
     {
       id: 4,
       pergunta: "Qual destas situações torna o consentimento inválido?",
       opcoes: [
         "A pessoa marca uma caixa por vontade própria após ler a finalidade",
         "Uma caixinha de aceite já vem marcada por padrão",
         "A pessoa pode revogar o consentimento depois",
         "A finalidade está descrita de forma clara",
       ],
       respostaCorreta: 1,
     },
     {
       id: 5,
       pergunta: "É correto afirmar que o consentimento:",
       opcoes: [
         "É a única base legal que permite usar dados pessoais",
         "É uma entre várias bases legais previstas na LGPD",
         "Dispensa qualquer informação ao titular",
         "Vale para qualquer uso futuro, sem limites",
       ],
       respostaCorreta: 1,
     },
   ],
   forum: [],
 },
 {
   trilhaSlug: "lgpd-protecao-de-dados",
   moduloId: 5,
   videoTitulo: "Vazamentos de dados: como prevenir e o que fazer",
   videoDuracao: "15:00",
   conteudo: [
     "Um vazamento de dados é um tipo de incidente de segurança: um evento em que dados pessoais são acessados, perdidos, alterados ou expostos sem autorização. Pode acontecer por ataque de criminosos, por erro humano (um e-mail enviado para a pessoa errada) ou por falha técnica. As consequências vão de golpes e fraudes a constrangimento e discriminação.",
     "Para reduzir o risco do lado de quem usa serviços: use senhas fortes e diferentes para cada serviço, de preferência com um gerenciador de senhas; ative a verificação em duas etapas sempre que disponível; desconfie de mensagens com links e pedidos urgentes (phishing); compartilhe o mínimo de dados possível; e mantenha aparelhos e aplicativos atualizados.",
     "Se seus dados vazarem: troque imediatamente as senhas afetadas e ative a verificação em duas etapas; fique atento a cobranças e tentativas de golpe; avise seu banco se dados financeiros estiverem envolvidos; guarde provas (prints, e-mails); e procure o serviço responsável, registrando reclamação na ANPD e em órgãos de defesa do consumidor se necessário.",
     "A LGPD obriga quem trata dados a adotar medidas de segurança e a comunicar os incidentes que possam gerar risco ou dano relevante. Pela regulamentação da ANPD, essa comunicação à autoridade e aos titulares afetados deve ser feita pelo responsável em um prazo curto, contado a partir do momento em que se tem ciência de que o incidente atingiu dados pessoais.",
     "Lembrete importante: nenhuma empresa séria pede sua senha completa, código de verificação ou dados de cartão por telefone, e-mail ou mensagem. Um pedido assim é quase sempre um golpe.",
   ],
   questoes: [
     {
       id: 1,
       pergunta: "Qual destas é a melhor prática para reduzir o impacto de um vazamento?",
       opcoes: [
         "Usar a mesma senha em todos os serviços para não esquecer",
         "Usar senhas fortes e diferentes e ativar a verificação em duas etapas",
         "Anotar as senhas num papel colado no monitor",
         "Compartilhar a senha com pessoas de confiança",
       ],
       respostaCorreta: 1,
     },
     {
       id: 2,
       pergunta:
         "Você recebeu um e-mail urgente pedindo que clique num link e confirme sua senha do banco. O mais seguro é:",
       opcoes: [
         "Clicar rápido para não perder o prazo",
         "Responder o e-mail com a senha",
         "Ignorar o link e confirmar pelo canal oficial do banco",
         "Encaminhar para amigos pedirem orientação",
       ],
       respostaCorreta: 2,
     },
     {
       id: 3,
       pergunta:
         "Segundo a LGPD, quando um incidente pode causar risco ou dano relevante, o responsável pelos dados deve:",
       opcoes: [
         "Esconder o ocorrido para não assustar os clientes",
         "Comunicar a ANPD e os titulares afetados em prazo curto",
         "Esperar a ANPD descobrir sozinha",
         "Cobrar uma taxa dos titulares para informar",
       ],
       respostaCorreta: 1,
     },
     {
       id: 4,
       pergunta: "Qual destas situações também é um incidente de segurança com dados pessoais?",
       opcoes: [
         "Um e-mail com dados de várias pessoas enviado por engano para o destinatário errado",
         "Um cliente atualizar o próprio endereço no cadastro",
         "Uma empresa pedir consentimento antes de coletar dados",
         "Uma pessoa consultar os próprios dados",
       ],
       respostaCorreta: 0,
     },
     {
       id: 5,
       pergunta:
         "Você descobre que seus dados de uma loja vazaram. Qual é uma primeira atitude adequada?",
       opcoes: [
         "Trocar as senhas afetadas e ativar a verificação em duas etapas",
         "Apagar todos os seus aplicativos imediatamente",
         "Ignorar, pois não há nada a fazer",
         "Repassar seus dados para outras pessoas se protegerem",
       ],
       respostaCorreta: 0,
     },
   ],
   forum: [],
 },
 {
   trilhaSlug: "lgpd-protecao-de-dados",
   moduloId: 6,
   videoTitulo: "Boas práticas de privacidade para pessoas e pequenos projetos",
   videoDuracao: "15:00",
   conteudo: [
     "Proteção de dados não é assunto só de grandes empresas. Um grupo de voluntários que mantém uma lista de contatos, um projeto de extensão que coleta inscrições ou uma pessoa que administra um perfil também tratam dados pessoais — e podem aplicar boas práticas simples.",
     "Para a vida pessoal: pense antes de publicar (foto, localização e rotina também são dados); revise periodicamente as permissões e a privacidade das suas contas; evite informar dados sensíveis a serviços que não precisam deles; use senhas fortes e verificação em duas etapas; e tenha cuidado redobrado com dados de crianças e adolescentes.",
     "Para pequenos projetos e iniciativas: colete só o necessário (cada campo de um formulário deve ter um motivo claro); explique a finalidade e por quanto tempo os dados serão usados; guarde com segurança, limitando quem tem acesso; não compartilhe sem necessidade; descarte quando os dados perderem a finalidade; e ofereça um canal simples para a pessoa pedir acesso, correção ou exclusão.",
     "Uma ideia poderosa e fácil de adotar é pensar na privacidade desde o início de qualquer projeto, e não como um remendo no final. Ao planejar um cadastro, uma pesquisa ou um evento, pergunte-se: de quais dados eu realmente preciso? Onde vou guardá-los? Quem terá acesso? Como vou apagá-los depois?",
     "Resumo da trilha em uma frase: trate os dados das outras pessoas com o mesmo cuidado que você gostaria que tratassem os seus. Este conteúdo é educativo e introdutório e não substitui orientação jurídica.",
   ],
   questoes: [
     {
       id: 1,
       pergunta: "Ao montar o formulário de inscrição de um projeto comunitário, a melhor atitude é:",
       opcoes: [
         "Pedir o máximo de dados possível, por garantia",
         "Coletar apenas os dados necessários, com finalidade clara",
         "Não explicar para que servem os dados",
         "Compartilhar a lista com qualquer parceiro interessado",
       ],
       respostaCorreta: 1,
     },
     {
       id: 2,
       pergunta: "Privacidade desde a concepção significa:",
       opcoes: [
         "Resolver questões de privacidade só depois de um problema",
         "Pensar na proteção de dados desde o início do projeto",
         "Deixar a privacidade por conta dos usuários",
         "Coletar dados primeiro e decidir o uso depois",
       ],
       respostaCorreta: 1,
     },
     {
       id: 3,
       pergunta: "Sobre dados de crianças e adolescentes, o correto é:",
       opcoes: [
         "Tratá-los como qualquer outro dado, sem cuidado especial",
         "Ter cuidado redobrado, pois exigem proteção reforçada",
         "Publicá-los livremente em redes sociais",
         "Ignorá-los, pois a LGPD não se aplica a menores",
       ],
       respostaCorreta: 1,
     },
     {
       id: 4,
       pergunta:
         "Um projeto guardou planilhas de inscritos de anos anteriores que não têm mais utilidade. A boa prática é:",
       opcoes: [
         "Manter tudo para sempre, por garantia",
         "Descartar os dados que já cumpriram sua finalidade",
         "Repassar as planilhas a qualquer parceiro",
         "Publicar a lista para dar transparência",
       ],
       respostaCorreta: 1,
     },
     {
       id: 5,
       pergunta: "Qual destas é uma boa prática de privacidade na vida pessoal?",
       opcoes: [
         "Usar a mesma senha em tudo para não esquecer",
         "Revisar periodicamente as permissões e a privacidade das contas",
         "Publicar localização e rotina em tempo real sempre",
         "Informar dados sensíveis a qualquer serviço que pedir",
       ],
       respostaCorreta: 1,
     },
   ],
   forum: [],
 },
];

/* ===== Helpers de cor por tema ===== */
export const corMap = {
  blue: {
    bg: "bg-[var(--color-mack-bg)]",
    text: "text-[var(--color-mack)]",
    border: "border-[var(--color-mack)]",
    fill: "bg-[var(--color-mack)]",
  },
  green: {
    bg: "bg-[var(--color-mack-bg)]",
    text: "text-[var(--color-mack)]",
    border: "border-[var(--color-mack)]",
    fill: "bg-[var(--color-mack)]",
  },
  orange: {
    bg: "bg-[var(--color-mack-bg)]",
    text: "text-[var(--color-mack)]",
    border: "border-[var(--color-mack)]",
    fill: "bg-[var(--color-mack)]",
  },
  red: {
    bg: "bg-[var(--color-mack-bg)]",
    text: "text-[var(--color-mack)]",
    border: "border-[var(--color-mack)]",
    fill: "bg-[var(--color-mack)]",
  },
  purple: {
    bg: "bg-[var(--color-mack-bg)]",
    text: "text-[var(--color-mack)]",
    border: "border-[var(--color-mack)]",
    fill: "bg-[var(--color-mack)]",
  },
} as const;

export type CorKey = keyof typeof corMap;
