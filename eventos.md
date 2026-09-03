---
title: "Eventos"
permalink: /eventos/
---

<!-- ===========================================================
     INTRODUÇÃO
     =========================================================== -->

<div class="banner-pagina">
  <h1>📅 Eventos</h1>
  <p>Confira os próximos eventos e reviva os encontros passados do nosso grupo.</p>
</div>

<!-- ===========================================================
     PRÓXIMOS EVENTOS
     =========================================================== -->

<h2>🔜 Próximos eventos</h2>

{% assign hoje = "now" | date: "%Y-%m-%d" %}
{% assign count = 0 %}

<div class="lista-eventos">
  {% for evento in site.eventos | sort: "data" %}
    {% assign data_evento = evento.data | date: "%Y-%m-%d" %}
    {% if data_evento >= hoje %}
      <div class="evento-item">
        <div class="evento-data">
          <span class="evento-dia">{{ evento.data | date: "%d" }}</span>
          <span class="evento-mes">{{ evento.data | date: "%b" }}</span>
          <span class="evento-ano">{{ evento.data | date: "%Y" }}</span>
        </div>
        
        <div class="evento-info">
          <h3>{{ evento.titulo }}</h3>
          
          {% if evento.palestrantes %}
            <p class="evento-palestrantes"><strong>Palestrante:</strong> {{ evento.palestrantes }}</p>
          {% endif %}
          
          <p class="evento-descricao">{{ evento.descricao }}</p>
          <p class="evento-local">📍 {{ evento.local }}</p>
          
          <p class="evento-data-completa">
            📅 {{ evento.data | date: "%d/%m/%Y" }}
          </p>
          
          {% if evento.inscricao %}
            <a href="{{ evento.inscricao }}" class="botao" target="_blank" rel="noopener noreferrer">
              📝 Inscrever-se
            </a>
          {% endif %}
        </div>
      </div>
      {% assign count = count | plus: 1 %}
    {% endif %}
  {% endfor %}
  
  {% if count == 0 %}
    <p class="aviso-vazio">Nenhum evento futuro agendado no momento.</p>
  {% endif %}
</div>

<!-- ===========================================================
     EVENTOS PASSADOS COM CARROSSEL
     =========================================================== -->

<h2>📸 Eventos passados</h2>

{% assign count_passados = 0 %}

<div class="eventos-passados">
  {% for evento in site.eventos | sort: "data" | reverse %}
    {% assign data_evento = evento.data | date: "%Y-%m-%d" %}
    {% if data_evento < hoje %}
      <div class="evento-passado-item">
        <div class="evento-passado-info">
          <h3>{{ evento.titulo }}</h3>
          
          {% if evento.palestrantes %}
            <p class="evento-palestrantes"><strong>Palestrante:</strong> {{ evento.palestrantes }}</p>
          {% endif %}
          
          <p class="evento-data-passado">
            📅 {{ evento.data | date: "%d/%m/%Y" }}
            {% if evento.local %}
              — 📍 {{ evento.local }}
            {% endif %}
          </p>
          
          <p class="evento-descricao">{{ evento.descricao }}</p>
        </div>
        
        <!-- Carrossel de 3 fotos -->
        {% if evento.fotos %}
          <div class="carrossel-eventos" data-carousel="{{ evento.title | slugify }}">
            <div class="carrossel-container">
              {% for foto in evento.fotos limit: 3 %}
                <div class="carrossel-slide">
                  <img src="{{ foto | relative_url }}" alt="{{ evento.titulo }}" loading="lazy">
                </div>
              {% endfor %}
            </div>
            
            {% if evento.fotos.size > 1 %}
              <button class="carrossel-btn carrossel-btn-anterior" aria-label="Anterior">❮</button>
              <button class="carrossel-btn carrossel-btn-proximo" aria-label="Próximo">❯</button>
            {% endif %}
          </div>
          
          <div class="carrossel-indicadores">
            {% for foto in evento.fotos limit: 3 %}
              <span class="carrossel-dot" data-slide="{{ forloop.index0 }}"></span>
            {% endfor %}
          </div>
        {% endif %}
      </div>
      {% assign count_passados = count_passados | plus: 1 %}
    {% endif %}
  {% endfor %}
  
  {% if count_passados == 0 %}
    <p class="aviso-vazio">Nenhum evento passado cadastrado ainda.</p>
  {% endif %}
</div>

<!-- ===========================================================
     JAVASCRIPT PARA CARROSSEL
     =========================================================== -->

<script>
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.carrossel-eventos').forEach(function(carrossel) {
    const slides = carrossel.querySelectorAll('.carrossel-slide');
    const dots = carrossel.parentElement.querySelectorAll('.carrossel-dot');
    let indiceAtual = 0;
    
    if (slides.length === 0) return;
    
    function mostrarSlide(indice) {
      slides.forEach(function(slide, i) {
        slide.style.display = i === indice ? 'block' : 'none';
      });
      
      dots.forEach(function(dot, i) {
        if (i === indice) {
          dot.classList.add('ativo');
        } else {
          dot.classList.remove('ativo');
        }
      });
    }
    
    var btnAnterior = carrossel.querySelector('.carrossel-btn-anterior');
    var btnProximo = carrossel.querySelector('.carrossel-btn-proximo');
    
    if (btnAnterior) {
      btnAnterior.addEventListener('click', function() {
        indiceAtual = (indiceAtual - 1 + slides.length) % slides.length;
        mostrarSlide(indiceAtual);
      });
    }
    
    if (btnProximo) {
      btnProximo.addEventListener('click', function() {
        indiceAtual = (indiceAtual + 1) % slides.length;
        mostrarSlide(indiceAtual);
      });
    }
    
    dots.forEach(function(dot, i) {
      dot.addEventListener('click', function() {
        indiceAtual = i;
        mostrarSlide(indiceAtual);
      });
    });
    
    mostrarSlide(0);
  });
});
</script>
