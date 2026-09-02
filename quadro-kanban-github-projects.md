# Quadro Kanban — Gestão do site (GitHub Projects)

Como montar: no repositório `medicinais_jbrj.github.io` → aba **Projects** → **New project** → template **Board**. Crie 4 colunas com esses nomes exatos:

```
A escrever  →  Em revisão (Viviane)  →  No GitHub  →  Publicado
```

Cada linha abaixo vira um card (issue). Copie o título, a coluna inicial e as etiquetas (labels) sugeridas — dá pra criar as issues em lote colando essa lista no campo de criação em massa do GitHub Projects.

---

## Coleções

| Card | Responsável | Coluna inicial | Label |
|---|---|---|---|
| CTPM — Sobre a Coleção | Karen e Catarina | A escrever | `ctpm` |
| CTPM — Coleção Viva (monografias) | Karen e Catarina | A escrever | `ctpm` |
| CTPM — Visite (roteiro autoguiado) | Karen e Catarina | No GitHub | `ctpm` `pronto` |
| RBetno — Sobre a Coleção | Maria Paula | A escrever | `rbetno` |

## Publicações

| Card | Responsável | Coluna inicial | Label |
|---|---|---|---|
| Publicações — página com filtro por coleção | Luisa | A escrever | `publicacoes` |
| Publicações — migrar manuais existentes (Restinga, Amazônia) | Luisa e todos | A escrever | `publicacoes` |
| Publicações — cadastrar novas publicações de cada frente | Todos | A escrever | `publicacoes` |

## Eventos e Atividades

| Card | Responsável | Coluna inicial | Label |
|---|---|---|---|
| Eventos — página de histórico | Thalita e Kaique | A escrever | `eventos` |
| Eventos — EPA (Etnobotânica de Portas Abertas) | Kaique | A escrever | `eventos` |
| Eventos — registro de visitas técnicas | Thalita | A escrever | `eventos` |

## Quem Somos

| Card | Responsável | Coluna inicial | Label |
|---|---|---|---|
| Quem Somos — O Grupo de Pesquisa (espelho CNPq) | Camila | A escrever | `quem-somos` |
| Quem Somos — O Programa (missão, história, justificativa) | Kaique | A escrever | `quem-somos` |
| Quem Somos — Nossa Equipe (`_data/equipe.yml`) | Todos | A escrever | `quem-somos` |
| Quem Somos — Compromissos (ODS 3, 4, 15 / Dipeq · Dicat) | A definir | A escrever | `quem-somos` |

## Contato e Visita

| Card | Responsável | Coluna inicial | Label |
|---|---|---|---|
| Contato e Visita — endereço, horário, e-mail | Luisa | A escrever | `contato` |
| Contato e Visita — links de agendamento de visitas | Luisa | A escrever | `contato` |

## Home

| Card | Responsável | Coluna inicial | Label |
|---|---|---|---|
| Home — reformular como hub (coleções + publicações + eventos) | Luisa | A escrever | `home` |

## Estrutura técnica (transversal)

| Card | Responsável | Coluna inicial | Label |
|---|---|---|---|
| Configurar collections no `_config.yml` (`_publicacoes`, `_eventos`) | Luisa | A escrever | `tecnico` |
| Criar `_data/equipe.yml` | Luisa | A escrever | `tecnico` |
| Criar componente de badge de coleção (CTPM/RBetno) | Luisa | A escrever | `tecnico` |
| Definir paleta de cores (coral CTPM / teal RBetno) | Luisa | A escrever | `tecnico` |

---

## Como usar o quadro no dia a dia

- Toda vez que alguém termina de escrever sua seção no documento colaborativo, move o card de **A escrever** para **Em revisão (Viviane)**.
- A Viviane revisa o conteúdo (mesmo fluxo que já usam para orientação acadêmica) e só então o card vai para **No GitHub**, quando alguém (a própria frente ou quem estiver auxiliando na arquitetura) transforma o conteúdo em Markdown e sobe pro repositório.
- Quando o GitHub Pages já reconstruiu o site com aquele conteúdo no ar, o card vai para **Publicado**.
- Prazo do documento de gestão: **última semana de setembro** — vale revisar esse quadro semanalmente pra ver o que está represado em "A escrever" perto do prazo.
