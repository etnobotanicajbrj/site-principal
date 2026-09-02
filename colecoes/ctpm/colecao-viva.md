---
title: "Coleção Viva"
layout: default
permalink: /colecoes/ctpm/
---

<!-- Responsáveis: Karen e Catarina -->
<!-- [preencher — texto curto de apresentação da Coleção Viva] -->

<div class="busca-plantas">
  <input type="text" id="busca-planta-input" placeholder="Buscar por nome, espécie ou uso..." aria-label="Buscar planta">
</div>

<div class="grade-plantas" id="grade-plantas">
  {% for planta in site.plantas %}
    <a href="{{ planta.url | relative_url }}"
       class="card-planta"
       data-busca="{{ planta.nome_popular | downcase }} {{ planta.nome_cientifico | downcase }} {{ planta.usos | join: ' ' | downcase }}">
      <img src="{{ planta.foto | relative_url }}" alt="{{ planta.nome_popular }}">
      <p class="nome-popular">{{ planta.nome_popular }}</p>
      <p class="nome-cientifico"><em>{{ planta.nome_cientifico }}</em></p>
      {% include badge-uso.html usos=planta.usos %}
    </a>
  {% endfor %}
</div>

<p id="sem-resultado" style="display:none;">Nenhuma planta encontrada.</p>

<script>
document.getElementById('busca-planta-input').addEventListener('input', function (e) {
  var termo = e.target.value.trim().toLowerCase();
  var cards = document.querySelectorAll('.card-planta');
  var algumVisivel = false;

  cards.forEach(function (card) {
    var corresponde = card.dataset.busca.indexOf(termo) !== -1;
    card.style.display = corresponde ? '' : 'none';
    if (corresponde) { algumVisivel = true; }
  });

  document.getElementById('sem-resultado').style.display = algumVisivel ? 'none' : '';
});
</script>
