---
title: "Coleção Viva"
layout: default
permalink: /colecoes/ctpm/colecao-viva/
---

<!-- ===========================================================
     BANNER MÍNIMO
     =========================================================== -->

<h1 style="text-align: center; margin-bottom: 4px;">Plantas da Coleção Viva</h1>
<p style="text-align: center; color: #888; font-size: 0.9rem; margin-top: 0; margin-bottom: 32px;">
  CTPM · Coleção Temática de Plantas Medicinais
</p>

<!-- ===========================================================
     BARRA DE BUSCA (somente o campo)
     =========================================================== -->

<div class="busca-plantas">
  <input 
    type="text" 
    id="busca-planta-input" 
    placeholder=" 🔍 Buscar por nome popular, nome científico ou uso...  " 
    aria-label="Buscar planta"
  >
</div>

<!-- ===========================================================
     GRADE DE PLANTAS (apenas 10)
     =========================================================== -->

<div class="grade-plantas" id="grade-plantas">
  {% assign plantas_mostrar = site.plantas | limit: 10 %}
  {% for planta in plantas_mostrar %}
    <a href="{{ planta.url | relative_url }}"
       class="card-planta"
       data-busca="{{ planta.nome_popular | downcase }} {{ planta.nome_cientifico | downcase }} {{ planta.usos | join: ' ' | downcase }}">
      {% if planta.foto %}
      <img src="{{ planta.foto | relative_url }}" alt="{{ planta.nome_popular }}" loading="lazy">
      {% else %}
      <div class="sem-foto">🌿</div>
      {% endif %}
      <p class="nome-popular">{{ planta.nome_popular }}</p>
      <p class="nome-cientifico"><em>{{ planta.nome_cientifico }}</em></p>
      {% if planta.usos %}
      <div class="badges-uso">
        {% for uso in planta.usos %}
        <span class="badge-uso">{{ uso }}</span>
        {% endfor %}
      </div>
      {% endif %}
    </a>
  {% else %}
    <p class="aviso-vazio">Nenhuma planta cadastrada ainda.</p>
  {% endfor %}
</div>

<p id="sem-resultado" style="display:none; text-align:center; color:#888; padding:32px 0;">
  Nenhuma planta encontrada. Tente outro termo.
</p>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const input = document.getElementById('busca-planta-input');
  const cards = document.querySelectorAll('.card-planta');
  const semResultado = document.getElementById('sem-resultado');

  if (!input) return;

  input.addEventListener('input', function (e) {
    var termo = e.target.value.trim().toLowerCase();
    var algumVisivel = false;

    cards.forEach(function (card) {
      var corresponde = card.dataset.busca.indexOf(termo) !== -1;
      card.style.display = corresponde ? '' : 'none';
      if (corresponde) { algumVisivel = true; }
    });

    semResultado.style.display = algumVisivel ? 'none' : 'block';
  });
});
</script>
