---
title: "Eventos e Atividades"
permalink: /eventos/
---

<!-- Responsáveis: Thalita e Kaique -->

<div class="lista-eventos">
  {% assign eventos_ordenados = site.eventos | sort: "data" | reverse %}
  {% for evento in eventos_ordenados %}
    <div class="item-evento">
      <p class="data-evento">{{ evento.data | date: "%d/%m/%Y" }}</p>
      <a href="{{ evento.url | relative_url }}">{{ evento.titulo }}</a>
    </div>
  {% endfor %}
</div>
