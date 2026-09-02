# site-principal

Nova versão 2.0 do site do **Grupo de Estudos em Etnobotânica**, Instituto de Pesquisas Jardim Botânico do Rio de Janeiro (JBRJ).

O repositório anterior (`medicinais_jbrj.github.io`) permanece publicado como memória histórica do projeto; este repositório é o ponto de partida da nova estrutura.

## Rodando o site localmente

```bash
bundle install
bundle exec jekyll serve
```

O site fica disponível em `http://localhost:4000`.

## Estrutura do repositório

| Pasta/arquivo | Conteúdo |
|---|---|
| `_config.yml` | Configuração do Jekyll (título, collections, plugins) |
| `_data/navigation.yml` | Itens do menu principal |
| `_data/equipe.yml` | Lista da equipe (sem página individual por pessoa) |
| `_layouts/` | Modelos de página (`default`, `colecao`, `publicacao`, `planta`) |
| `_includes/` | Componentes reutilizáveis (cabeçalho, rodapé, badges) |
| `_sass/`, `assets/` | Estilos e arquivos estáticos (imagens, áudios, PDFs) |
| `_publicacoes/`, `_eventos/`, `_plantas/` | Collections — um arquivo por publicação, evento ou planta |
| `colecoes/`, `quem-somos/`, `publicacoes.md`, `eventos.md`, `contato.md`, `index.md` | Páginas do site |

Ver `estrutura-site-etnobotanica.md` (documento de referência da arquitetura) para o racional completo por trás dessas decisões.

## Licença

O arquivo `LICENSE.md` está com uma licença **provisória** (Creative Commons Atribuição-NãoComercial 4.0). Ver `licencas/COMO-DECIDIR.md` para as variantes disponíveis antes de confirmar a definitiva.

## Gestão e fluxo de trabalho

Ver o quadro Kanban do GitHub Projects e o documento de gestão para o fluxo de elaboração → revisão (Viviane) → publicação, e a divisão de responsabilidades por seção do site.
