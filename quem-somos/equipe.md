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

    <!-- Badges das coleções / programa / pesquisa -->
    <div class="membro-badges">
      {% if membro.colecoes %}
        {% for colecao in membro.colecoes %}
          {% if colecao == "ctpm" %}
            <span class="badge-colecao badge-ctpm">CTPM</span>
          {% elsif colecao == "rbetno" %}
            <span class="badge-colecao badge-rbetno">RBetno</span>
          {% elsif colecao == "programa" %}
            <span class="badge-colecao badge-programa">Programa</span>
          {% elsif colecao == "pesquisa" %}
            <span class="badge-colecao badge-pesquisa">Pesquisa</span>
          {% endif %}
        {% endfor %}
      {% endif %}
    </div>

    <!-- Descrição -->
    {% if membro.descricao %}
      <p class="membro-descricao">{{ membro.descricao }}</p>
    {% endif %}

    <!-- Links Lattes e ORCID com logos -->
    <div class="membro-links">
      {% if membro.lattes %}
        <a href="{{ membro.lattes }}" class="membro-link" target="_blank" rel="noopener noreferrer">
          <!-- Logo Lattes oficial (CNPq) -->
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="18" height="18">
            <rect width="200" height="200" fill="#003366" rx="16"/>
            <text x="100" y="120" font-family="Arial, Helvetica, sans-serif" font-size="60" font-weight="bold" fill="white" text-anchor="middle" letter-spacing="-2">L</text>
            <text x="100" y="148" font-family="Arial, Helvetica, sans-serif" font-size="13" fill="#66B5FF" text-anchor="middle" letter-spacing="2.5">ATTES</text>
          </svg>
          Lattes
        </a>
      {% endif %}
      
      {% if membro.orcid %}
        <a href="{{ membro.orcid }}" class="membro-link" target="_blank" rel="noopener noreferrer">
          <!-- Logo ORCID oficial -->
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="18" height="18">
            <rect width="256" height="256" fill="#A6CE39" rx="28"/>
            <path d="M86.3 186.2H70.9V79.1h15.4v107.1zM108.9 79.1h41.1c17.4 0 26.4 10.4 26.4 26.4 0 16.8-9.3 27.2-26.4 27.2h-25.7v53.5h-15.4V79.1zm15.4 39.3h23.9c8.6 0 12.2-5.8 12.2-12.7 0-6.8-4.1-12.2-12.7-12.2h-23.4v24.9z" fill="#fff"/>
          </svg>
          ORCID
        </a>
      {% endif %}
    </div>

  </div>

  {% endfor %}

</div>
