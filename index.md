---
title: "Home"
permalink: /
---

<!-- [preencher — descrição breve do grupo] -->

## Coleções

<!-- [preencher — 1-2 linhas + link para /colecoes/ctpm/ e /colecoes/rbetno/] -->

## Últimas publicações

{% assign recentes = site.publicacoes | sort: "data" | reverse | limit: 3 %}
<ul>
  {% for pub in recentes %}
    <li><a href="{{ pub.url | relative_url }}">{{ pub.titulo }}</a></li>
  {% endfor %}
</ul>

## Próximos eventos

{% assign proximos = site.eventos | sort: "data" | limit: 3 %}
<ul>
  {% for evento in proximos %}
    <li><a href="{{ evento.url | relative_url }}">{{ evento.titulo }}</a></li>
  {% endfor %}
</ul>

## Visita autoguiada

<!-- [preencher — chamada para /colecoes/ctpm/visite/] -->
