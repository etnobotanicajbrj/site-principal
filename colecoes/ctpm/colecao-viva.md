---
title: "Plantas da Coleção Viva"
sigla: "CTPM"
sigla_significado: "Coleção Temática de Plantas Medicinais"
diretoria_nome: "Diretoria de Conhecimento, Ambiente e Tecnologia"
sigla_diretoria: "DICAT"
cor: "ctpm"
layout: colecao-viva
permalink: /colecoes/ctpm/colecao-viva/
descricao: "Explore o acervo vivo da Coleção Temática de Plantas Medicinais. Conheça as espécies que compõem a exposição a céu aberto 'Saberes e Olhares Diversos'."
---

<!-- Responsáveis: Karen e Catarina -->

<div class="busca-plantas">
  <input 
    type="text" 
    id="busca-planta-input" 
    placeholder="🔍 Buscar por nome popular, nome científico ou uso..." 
    aria-label="Buscar planta"
  >
</div>

<div class="grade-plantas" id="grade-plantas">
  {% for planta in site.plantas %}
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

<p id="sem-resultado" style="display:none;">🌱 Nenhuma planta encontrada. Tente outro termo.</p>

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
