---
title: "Eventos"
permalink: /eventos/
---

<!-- ===========================================================
     LISTA DE EVENTOS
     =========================================================== -->

<div class="lista-eventos">
  {% for evento in site.eventos | sort: "data" %}
    <div class="evento-item">
      <div class="evento-data">
        <span class="evento-dia">{{ evento.data | date: "%d" }}</span>
        <span class="evento-mes">{{ evento.data | date: "%b" }}</span>
      </div>
      
      <div class="evento-info">
        <h3>{{ evento.titulo }}</h3>
        
        {% if evento.palestrantes %}
          <p class="evento-palestrantes">Palestrante {{ evento.palestrantes }}</p>
        {% endif %}
        
        <p class="evento-descricao">{{ evento.descricao }}</p>
        <p class="evento-local">📍 {{ evento.local }}</p>
        
        {% if evento.inscricao %}
          <a href="{{ evento.inscricao }}" class="botao" target="_blank" rel="noopener noreferrer">
            📝 Inscrever-se
          </a>
        {% endif %}
      </div>
    </div>
  {% endfor %}
</div>
