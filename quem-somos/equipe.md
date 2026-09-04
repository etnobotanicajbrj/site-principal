---
title: "Nossa Equipe"
layout: default
permalink: /quem-somos/equipe
---

## Nossa Equipe

  <div class="grid-equipe">
    {% for pessoa in site.data.equipe %}
      <div class="card-pessoa">
        <img src="{{ pessoa.foto | relative\_url }}" alt="{{ pessoa.nome }}">
        <p class="nome-pessoa">{{ pessoa.nome }}</p>
        <p class="funcao-pessoa">{{ pessoa.funcao }}</p>
        {% include badge-colecao.html colecoes=pessoa.colecoes %}
      </div>
    {% endfor %}
  </div>
