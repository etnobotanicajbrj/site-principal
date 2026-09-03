---
title: "Publicações"
permalink: /publicacoes/
---

<!-- ===========================================================
     FILTRO POR COLEÇÃO / PROGRAMA / PESQUISA
     =========================================================== -->

<div class="filtro-colecao">
  <button class="filtro-btn ativo" data-colecao="todas">📚 Todas</button>
  <button class="filtro-btn" data-colecao="ctpm">🌿 CTPM</button>
  <button class="filtro-btn" data-colecao="rbetno">🌐 RBetno</button>
  <button class="filtro-btn" data-colecao="programa">📊 Programa</button>
  <button class="filtro-btn" data-colecao="pesquisa">🔬 Pesquisa</button>
</div>

<!-- ===========================================================
     GRADE DE PUBLICAÇÕES
     =========================================================== -->

<div class="grid-publicacoes" id="grid-publicacoes">
  {% for pub in site.publicacoes %}
    <div class="card-publicacao" data-colecao="{{ pub.colecao }}">
      
      <!-- Thumbnail -->
      {% if pub.thumbnail %}
        <div class="thumbnail-publicacao">
          <img src="{{ pub.thumbnail | relative_url }}" alt="{{ pub.titulo }}" loading="lazy">
        </div>
      {% else %}
        <div class="thumbnail-publicacao sem-imagem">
          <span>📖</span>
        </div>
      {% endif %}
      
      <!-- Conteúdo -->
      <div class="conteudo-card-publicacao">
        <!-- Badges -->
        <div class="badges-publicacao">
          {% include badge-colecao.html colecoes=pub.colecao %}
          {% if pub.tipo %}
            <span class="tipo-publicacao">{{ pub.tipo | upcase }}</span>
          {% endif %}
        </div>
        
        <!-- Título -->
        <h3 class="titulo-publicacao">
          {% if pub.link %}
            <a href="{{ pub.link }}" target="_blank" rel="noopener noreferrer">
              {{ pub.titulo }}
              <span class="icone-externo">↗</span>
            </a>
          {% elsif pub.arquivo %}
            <a href="{{ pub.arquivo | relative_url }}" target="_blank" rel="noopener noreferrer">
              {{ pub.titulo }}
              <span class="icone-externo">↗</span>
            </a>
          {% elsif pub.url %}
            <a href="{{ pub.url | relative_url }}">{{ pub.titulo }}</a>
          {% else %}
            <span>{{ pub.titulo }}</span>
          {% endif %}
        </h3>
        
        <!-- Autores -->
        {% if pub.autores %}
          <p class="autores-publicacao">{{ pub.autores }}</p>
        {% endif %}
        
        <!-- Ano -->
        {% if pub.ano %}
          <span class="ano-publicacao">{{ pub.ano }}</span>
        {% endif %}
        
        <!-- Descrição -->
        {% if pub.descricao %}
          <p class="descricao-publicacao">{{ pub.descricao | truncate: 120 }}</p>
        {% endif %}
        
        <!-- Link de acesso -->
        {% if pub.link %}
          <a href="{{ pub.link }}" class="indicador-acesso" target="_blank" rel="noopener noreferrer">
            🔗 Acessar online
          </a>
        {% elsif pub.arquivo %}
          <a href="{{ pub.arquivo | relative_url }}" class="indicador-acesso" target="_blank" rel="noopener noreferrer">
            📄 Baixar PDF
          </a>
        {% endif %}
      </div>
    </div>
  {% endfor %}
</div>

<!-- ===========================================================
     MENSAGEM "SEM RESULTADO"
     =========================================================== -->

<p id="sem-resultado" style="display:none; text-align:center; color:#888; padding:32px 0;">
  📚 Nenhuma publicação encontrada para este filtro.
</p>

<!-- ===========================================================
     JAVASCRIPT PARA FILTRO
     =========================================================== -->

<script>
document.querySelectorAll('.filtro-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.filtro-btn').forEach(function (b) { b.classList.remove('ativo'); });
    btn.classList.add('ativo');
    
    var colecao = btn.dataset.colecao;
    var cards = document.querySelectorAll('.card-publicacao');
    var semResultado = document.getElementById('sem-resultado');
    var algumVisivel = false;
    
    cards.forEach(function (card) {
      var itemColecao = card.dataset.colecao;
      var mostraTodas = colecao === 'todas';
      var itemTemColecao = itemColecao && itemColecao.indexOf(colecao) !== -1;
      
      if (mostraTodas || itemTemColecao) {
        card.style.display = '';
        algumVisivel = true;
      } else {
        card.style.display = 'none';
      }
    });
    
    semResultado.style.display = algumVisivel ? 'none' : 'block';
  });
});
</script>
