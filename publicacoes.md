---
title: "Publicações"
permalink: /publicacoes/
---

<!-- ===========================================================
     FILTRO POR COLEÇÃO / PROGRAMA
     =========================================================== -->

<div class="filtro-colecao">
  <button class="filtro-btn ativo" data-colecao="todas">📚 Todas</button>
  <button class="filtro-btn" data-colecao="ctpm">🌿 CTPM</button>
  <button class="filtro-btn" data-colecao="rbetno">🌐 RBetno</button>
  <button class="filtro-btn" data-colecao="programa">📊 Programa</button>
</div>

<!-- ===========================================================
     LISTA DE PUBLICAÇÕES
     =========================================================== -->

<div class="lista-publicacoes">
  {% for pub in site.publicacoes %}
    <div class="item-publicacao" data-colecao="{{ pub.colecao }}">
      <!-- Badges -->
      {% include badge-colecao.html colecoes=pub.colecao %}
      
      <!-- Título com link -->
      <div class="titulo-publicacao">
        {% if pub.link %}
          <!-- Link externo (abre em nova aba) -->
          <a href="{{ pub.link }}" target="_blank" rel="noopener noreferrer">
            {{ pub.titulo }}
            <span class="icone-externo">↗</span>
          </a>
        {% elsif pub.arquivo %}
          <!-- Arquivo interno (PDF, etc.) -->
          <a href="{{ pub.arquivo | relative_url }}" target="_blank" rel="noopener noreferrer">
            {{ pub.titulo }}
            <span class="icone-externo">↗</span>
          </a>
        {% elsif pub.url %}
          <!-- Página interna do Jekyll -->
          <a href="{{ pub.url | relative_url }}">{{ pub.titulo }}</a>
        {% else %}
          <!-- Sem link (apenas texto) -->
          <span class="sem-link">{{ pub.titulo }}</span>
        {% endif %}
      </div>
      
      <!-- Data -->
      {% if pub.data %}
        <span class="data-publicacao">{{ pub.data | date: "%d/%m/%Y" }}</span>
      {% endif %}
      
      <!-- Tipo -->
      {% if pub.tipo %}
        <span class="tipo-publicacao">{{ pub.tipo }}</span>
      {% endif %}
      
      <!-- Indicador de link externo ou arquivo -->
      {% if pub.link or pub.arquivo %}
        <span class="indicador-acesso">
          {% if pub.link %}🔗{% elsif pub.arquivo %}📄{% endif %}
        </span>
      {% endif %}
    </div>
  {% endfor %}
</div>

<!-- ===========================================================
     JAVASCRIPT PARA FILTRO
     =========================================================== -->

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
