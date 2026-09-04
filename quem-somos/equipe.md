---
title: "Nossa Equipe"
layout: default
permalink: /quem-somos/equipe/
---

# Nossa Equipe

Conheça as pessoas que fazem parte do Grupo de Estudos em Etnobotânica do JBRJ.

<!-- ===========================================================
     GRID DA EQUIPE
     =========================================================== -->

<div class="equipe-grid">

  {% for membro in site.data.equipe %}

  <div class="membro-card">

    <!-- Foto -->
    {% if membro.foto %}
      <img src="{{ membro.foto | relative_url }}" alt="{{ membro.nome }}" loading="lazy">
    {% else %}
      <div class="membro-sem-foto">👤</div>
    {% endif %}

    <!-- Nome -->
    <h3>{{ membro.nome }}</h3>

    <!-- Função -->
    <p class="membro-funcao">{{ membro.funcao }}</p>

    <!-- Badges das coleções -->
    {% if membro.colecoes %}
      <div class="membro-badges">
        {% for colecao in membro.colecoes %}
          {% if colecao == "ctpm" %}
            <span class="badge-colecao badge-ctpm">CTPM</span>
          {% elsif colecao == "rbetno" %}
            <span class="badge-colecao badge-rbetno">RBetno</span>
          {% endif %}
        {% endfor %}
      </div>
    {% endif %}

    <!-- Descrição -->
    {% if membro.descricao %}
      <p class="membro-descricao">{{ membro.descricao }}</p>
    {% endif %}

    <!-- Links Lattes e ORCID -->
    <div class="membro-links">
      {% if membro.lattes %}
        <a href="{{ membro.lattes }}" class="membro-link" target="_blank" rel="noopener noreferrer">
          <span class="link-icon">📄</span> Lattes
        </a>
      {% endif %}
      
      {% if membro.orcid %}
        <a href="{{ membro.orcid }}" class="membro-link" target="_blank" rel="noopener noreferrer">
          <span class="link-icon">🆔</span> ORCID
        </a>
      {% endif %}
    </div>

  </div>

  {% endfor %}

</div>
