# Estrutura do site — Grupo de Estudos em Etnobotânica JBRJ

> **Atualização**: este documento passou a descrever o repositório novo, **`site-principal`**, criado do zero. O repositório anterior (`medicinais_jbrj.github.io`) permanece publicado apenas como memória histórica do projeto — quando este documento menciona "migrar conteúdo", a origem é sempre esse repositório antigo, não o mesmo repositório.
>
> Assume-se que o site usa **Jekyll** — o gerador padrão do GitHub Pages, e o que foi de fato usado para montar os arquivos-base do `site-principal`.

---

## 1. Esquema final da navegação

Baseado no documento "Gestão e Estrutura do Site" e nas decisões tomadas na conversa.

```
Home               (descrição breve, últimas publicações, próximos eventos, visita autoguiada)
Coleções ▾
   ├── Coleção Temática de Plantas Medicinais (CTPM) — Dicat        [Karen e Catarina]
   │      ├── Sobre a Coleção
   │      ├── Coleção Viva (banco de plantas: 1 página por espécie, com busca)
   │      └── Visite (roteiro autoguiado)
   └── Coleção de Etnobotânica (RBetno) — Dipeq                      [Maria Paula]
          └── Sobre a Coleção
Publicações        (publicações, manuais, cartilhas, jogos — com filtro por coleção)   [Luisa e todos]
Eventos e Atividades (histórico)                                     [Thalita e Kaique]
Quem Somos ▾
   ├── O Grupo de Pesquisa (espelho CNPq, descrição, histórico)      [Camila]
   ├── O Programa (missão, história, justificativa)                 [Kaique]
   ├── Nossa Equipe (cards com badge de coleção — sem página por pessoa)  [todos]
   └── Compromissos (ODS 3, 4, 15 / Dipeq · Dicat)
Contato e Visita   (e-mail, links das visitas, endereço, horário)    [Luisa]
```

**Lógica:** Coleções, Publicações e Eventos respondem "o que dá pra fazer aqui" e vêm primeiro. Quem Somos (que agora inclui a Equipe, sem página própria por pessoa) e Contato vêm depois, como contexto de credibilidade — não como porta de entrada.

---

## 2. Estrutura de pastas e arquivos proposta

```
medicinais_jbrj.github.io/
│
├── _config.yml                  # navegação, título do site, plugins, collections
│
├── _data/
│   ├── navigation.yml           # itens do menu
│   └── equipe.yml                # lista de pessoas (SEM página individual)
│
├── _includes/
│   ├── header.html              # menu com dropdowns "Coleções" e "Quem Somos"
│   ├── footer.html
│   └── badge-colecao.html       # componente reutilizável: selo CTPM / RBetno
│
├── _layouts/
│   ├── default.html
│   ├── colecao.html             # layout para as páginas de cada coleção
│   └── publicacao.html          # layout para cada publicação
│
├── _sass/
│   └── _colecoes.scss           # identidade visual (coral CTPM, teal RBetno)
│
├── assets/
│   ├── css/
│   ├── images/
│   │   ├── ctpm/
│   │   └── rbetno/
│   ├── docs/                    # monografias da Coleção Viva, PDFs de publicações
│   └── audio/                   # trilhas do roteiro autoguiado
│
├── _publicacoes/                # COLLECTION — 1 arquivo por publicação
│   ├── manual-restinga.md
│   ├── manual-amazonia.md
│   └── digitalizacao-rbetno.md
│
├── _eventos/                    # COLLECTION — 1 arquivo por evento/atividade
│   └── epa-2026-09.md           # ex: Etnobotânica de Portas Abertas
│
├── _plantas/                    # COLLECTION — 1 arquivo por espécie (Coleção Viva)
│   └── espinheira-santa.md
│
├── colecoes/
│   ├── ctpm/
│   │   ├── index.md             # Sobre a Coleção (CTPM)
│   │   ├── colecao-viva.md      # Guia + busca simples do banco de plantas
│   │   └── visite.md            # Visita autoguiada (migrar do repositório antigo)
│   └── rbetno/
│       └── index.md             # Sobre a Coleção (RBetno)
│
├── quem-somos/
│   ├── index.md                 # sumário com âncoras para as 4 subseções
│   ├── grupo-pesquisa.md        # espelho CNPq (Camila)
│   ├── programa.md              # missão/história/justificativa (Kaique)
│   └── compromissos.md          # ODS 3, 4, 15 / Dipeq · Dicat
│                                 # "Nossa Equipe" fica dentro de quem-somos/index.md,
│                                 # lida a partir de _data/equipe.yml
│
├── publicacoes.md               # lista publicações com filtro JS por coleção
├── eventos.md                   # lista de _eventos
├── contato.md                   # Contato e Visita
└── index.md                     # Home
```

### Por que Equipe não tem página própria por pessoa

A equipe fica **dentro de `quem-somos/index.md`**, numa seção com âncora (`#equipe`), lendo a lista de `_data/equipe.yml`. Isso evita ter que criar/apagar arquivo toda vez que alguém entra ou sai do grupo, e ainda permite linkar direto pra seção (ex: `/quem-somos/#equipe`) em redes sociais.

`_data/equipe.yml`:
```yaml
- nome: "Dra. Viviane Fonseca Kruel"
  funcao: "Orientadora"
  colecoes: [ctpm, rbetno]
  foto: /assets/images/equipe/viviane.jpg

- nome: "Luisa"
  funcao: "Mestranda — arquitetura geral do site"
  colecoes: [ctpm, rbetno]
  foto: /assets/images/equipe/luisa.jpg

- nome: "Karen"
  funcao: "Coleção Temática de Plantas Medicinais"
  colecoes: [ctpm]
  foto: /assets/images/equipe/karen.jpg

- nome: "Maria Paula"
  funcao: "Coleção de Etnobotânica"
  colecoes: [rbetno]
  foto: /assets/images/equipe/maria-paula.jpg

- nome: "Kaique"
  funcao: "Extensão (EPA e visitas técnicas)"
  colecoes: [ctpm, rbetno]
  foto: /assets/images/equipe/kaique.jpg

- nome: "Camila"
  funcao: "Grupo de Pesquisa CNPq"
  colecoes: [ctpm, rbetno]
  foto: /assets/images/equipe/camila.jpg

- nome: "Thalita"
  funcao: "Apoio à extensão e registro de atividades"
  colecoes: [ctpm, rbetno]
  foto: /assets/images/equipe/thalita.jpg
```

Um bloco de Liquid simples em `quem-somos/index.md` percorre `site.data.equipe` e renderiza os cards com badge — mesma lógica visual já validada nos mockups anteriores.

### Por que Publicações e Eventos continuam sendo "collections"

Cada publicação/evento tende a ter mais conteúdo (texto, PDF, capa) e se beneficia de ter uma URL própria (útil pra linkar no Instagram, por exemplo). Diferente da Equipe, aqui o crescimento é do tipo "peça de conteúdo", não "perfil de pessoa".

`_config.yml`:
```yaml
collections:
  publicacoes:
    output: true
    permalink: /publicacoes/:path/
  eventos:
    output: true
    permalink: /eventos/:path/
```

### Exemplo de arquivo — publicação com tag de coleção

`_publicacoes/digitalizacao-rbetno.md`
```yaml
---
layout: publicacao
titulo: "Digitalização da Coleção Etnobotânica"
colecao: rbetno
tipo: artigo
data: 2026-04-10
arquivo: /assets/docs/digitalizacao-rbetno.pdf
---
```

Publicações que não são de uma coleção específica (ex: cartilha da Covid-19, capítulo sobre o SUS) recebem `colecao: programa`.

Em `publicacoes.md`, os botões de filtro (`Todas / CTPM / RBetno / Programa`) usam esse campo `colecao` para mostrar/esconder itens via JavaScript simples, sem precisar de backend.

### Coleção Viva como banco de plantas com busca

Cada planta é um item da collection `_plantas`, com metadados estruturados (nome popular, nome científico, família, usos, foto, áudio opcional) e a história da planta como corpo do Markdown. A página `colecoes/ctpm/colecao-viva.md` lista todas automaticamente e tem um campo de busca em JavaScript puro que filtra por nome ou uso, sem precisar de backend.

`_plantas/espinheira-santa.md`
```yaml
---
layout: planta
nome_popular: "Espinheira-santa"
nome_cientifico: "Maytenus ilicifolia"
familia: "Celastraceae"
usos: [digestivo, gastrico]
foto: /assets/images/plantas/espinheira-santa.jpg
renisus: true
---
```

### Exemplo — página de coleção

`colecoes/ctpm/index.md`
```yaml
---
layout: colecao
title: "Coleção Temática de Plantas Medicinais"
sigla: "CTPM"
diretoria: "Dicat"
cor: coral
---
```

`colecoes/rbetno/index.md`
```yaml
---
layout: colecao
title: "Coleção de Etnobotânica"
sigla: "RBetno"
diretoria: "Dipeq"
cor: teal
---
```

O layout `colecao.html` usa o campo `cor` para aplicar a paleta certa automaticamente (mesma lógica visual dos mockups anteriores).

---

## 3. Migração do conteúdo do repositório antigo

O repositório `medicinais_jbrj.github.io` **não será apagado** — continua no ar como memória do projeto. O que segue é o mapa de para onde cada conteúdo dele deve ser **copiado** dentro do `site-principal`.

| Conteúdo no repositório antigo | Destino no `site-principal` |
|---|---|
| Home | `index.md` (reformulada como hub, não só CTPM) |
| Sobre (placeholder, nunca preenchido) | Seção "O Programa" dentro de `quem-somos/index.md`, com o texto da justificativa do programa |
| Visite (roteiro autoguiado + áudios) | `colecoes/ctpm/visite.md` — copiar o conteúdo e os arquivos de áudio para `assets/audio/` |
| Equipe | Seção "Nossa Equipe" dentro de `quem-somos/index.md`, lida de `_data/equipe.yml` |
| Publicações | `publicacoes.md` + 1 arquivo por publicação em `_publicacoes/` |
| Contato (placeholder, nunca preenchido) | `contato.md` (Contato e Visita), com endereço, horário, e-mail, mapa, links de agendamento |

Conteúdo novo, que não existia no repositório antigo:

| Seção | Onde fica |
|---|---|
| Eventos e Atividades | `eventos.md` + `_eventos/` |
| Coleção RBetno | `colecoes/rbetno/index.md` |
| Coleção Viva (banco de plantas com busca) | `colecoes/ctpm/colecao-viva.md` + `_plantas/` |
| O Grupo de Pesquisa (espelho CNPq) | Seção dentro de `quem-somos/index.md` |
| Compromissos (ODS) | Seção dentro de `quem-somos/index.md` |

---

## 4. Fluxo de gestão da equipe

Ver quadro em `quadro-kanban-github-projects.md` para a versão pronta pra copiar no GitHub Projects.

Resumo do fluxo (5 etapas):
1. **Elaboração de conteúdo** — cada frente escreve sua seção no documento colaborativo.
2. **Revisão** — a orientadora, **Viviane**, revisa o conteúdo antes de ir pro repositório. Luisa auxilia na elaboração do site (arquitetura geral e Contato), mas não é quem revisa.
3. **Transferência pro GitHub** — a frente responsável (ou quem estiver auxiliando na elaboração) cria/edita o arquivo Markdown.
4. **Notificação automática** — o GitHub notifica por e-mail o dono do repositório (`etnobotanicajbrj@gmail.com`) a cada alteração.
5. **Publicação** — o GitHub Pages reconstrói o site automaticamente.

---

## 5. Próximos passos sugeridos

1. Confirmar se o gerador é mesmo Jekyll (checar se existe `_config.yml` na raiz do repo).
2. Criar a estrutura de pastas vazias primeiro (sem quebrar o site atual).
3. Migrar o conteúdo existente conforme a tabela da seção 3.
4. Criar os arquivos da coleção RBetno e da Coleção Viva (mesmo que iniciais/curtos).
5. Implementar os badges e o filtro de publicações por último — são só CSS/JS, não bloqueiam o resto.
6. Prazo definido no documento de gestão: **última semana de setembro**.
