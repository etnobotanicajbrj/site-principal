---
title: "Publicações"
permalink: /publicacoes/
---

<!-- Responsáveis: Luisa e todos -->

<div class="filtro-colecao">
  <button class="filtro-btn ativo" data-colecao="todas">Todas</button>
  <button class="filtro-btn" data-colecao="ctpm">CTPM</button>
  <button class="filtro-btn" data-colecao="rbetno">RBetno</button>
  <button class="filtro-btn" data-colecao="programa">Programa</button>
</div>

<div class="lista-publicacoes">
  {% for pub in site.publicacoes %}
    <div class="item-publicacao" data-colecao="{{ pub.colecao }}">
      {% include badge-colecao.html colecoes=pub.colecao %}
      <a href="{{ pub.url | relative_url }}">{{ pub.titulo }}</a>
      {% if pub.data %}<span class="data-publicacao">{{ pub.data | date: "%d/%m/%Y" }}</span>{% endif %}
    </div>
  {% endfor %}
</div>

<script>
document.querySelectorAll('.filtro-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.filtro-btn').forEach(function (b) { b.classList.remove('ativo'); });
    btn.classList.add('ativo');
    var colecao = btn.dataset.colecao;
    document.querySelectorAll('.item-publicacao').forEach(function (item) {
      var itemColecao = item.dataset.colecao;
      var mostraTodas = colecao === 'todas';
      var itemTemColecao = itemColecao && itemColecao.indexOf(colecao) !== -1;
      item.style.display = (mostraTodas || itemTemColecao) ? '' : 'none';
    });
  });
});
</script>
