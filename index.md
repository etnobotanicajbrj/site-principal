---
title: "Página Inicial"
permalink: /
---

<!-- ===========================================================
     BANNER / INTRODUÇÃO
     =========================================================== -->

<div class="banner-home">
  <h2>Bem-vindo ao site do Grupo de Estudos em Etnobotânica</h2>
  <p class="banner-descricao">
    Pesquisa, curadoria e extensão em etnobotânica no 
    <strong>Instituto de Pesquisas Jardim Botânico do Rio de Janeiro</strong>.
    Conheça nossas coleções, publicações e eventos.
  </p>
</div>

<!-- ===========================================================
     COLEÇÕES EM DESTAQUE
     Cards com imagens em rotação e descrição
     =========================================================== -->

<h2>🪴 Coleções Biológicas</h2>

<div class="colecoes-grid">
  
  <!-- CARD 1: CTPM -->
  <a href="{{ '/colecoes/ctpm/index' | relative_url }}" class="card-colecao" style="text-decoration:none;">
    <!-- Slider de imagens (fundo) -->
    <div class="imagem-colecao-slider" data-carousel="ctpm">
      <img 
        src="{{ '/assets/images/colecoes/ctpm-1.jpg' | relative_url }}" 
        alt="Coleção Temática de Plantas Medicinais - imagem 1"
        class="ativa"
        loading="lazy"
      >
      <img 
        src="{{ '/assets/images/colecoes/ctpm-2.jpg' | relative_url }}" 
        alt="Coleção Temática de Plantas Medicinais - imagem 2"
        loading="lazy"
      >
      <img 
        src="{{ '/assets/images/colecoes/ctpm-3.jpg' | relative_url }}" 
        alt="Coleção Temática de Plantas Medicinais - imagem 3"
        loading="lazy"
      >
    </div>
    
    <!-- Conteúdo do card -->
    <div class="conteudo-card-colecao">
      <span class="sigla">CTPM . Dicat</span>
      <h3>Coleção Temática de Plantas Medicinais</h3>
      <p class="descricao-colecao">
        Acervo vivo com cerca de 170 espécies medicinais que compõe a exposição
          <strong>Saberes e Olhares Diversos</strong>. 
      </p>
      <span class="botao-card">Saiba mais →</span>
    </div>
  </a>

  <!-- CARD 2: RBetno -->
  <a href="{{ '/colecoes/rbetno/index' | relative_url }}" class="card-colecao" style="text-decoration:none;">
    <div class="imagem-colecao-slider" data-carousel="rbetno">
      <img 
        src="{{ '/assets/images/colecoes/rbetno-1.jpg' | relative_url }}" 
        alt="RBetno - imagem 1"
        class="ativa"
        loading="lazy"
      >
      <img 
        src="{{ '/assets/images/colecoes/rbetno-2.jpg' | relative_url }}" 
        alt="RBetno - imagem 2"
        loading="lazy"
      >
      <img 
        src="{{ '/assets/images/colecoes/rbetno-3.jpg' | relative_url }}" 
        alt="RBetno - imagem 3"
        loading="lazy"
      >
    </div>
    
    <div class="conteudo-card-colecao">
      <span class="sigla">RBetno . Dipeq</span>
      <h3>Coleção de Etnobotânica</h3>
      <p class="descricao-colecao">
        Acervo de plantas úteis, como pertences e materias com informações relacionadas com ao seu uso.
      </p>
      <span class="botao-card">Saiba mais →</span>
    </div>
  </a>

</div>

<!-- ===========================================================
     ÚLTIMAS PUBLICAÇÕES
     =========================================================== -->

<h2>📄 Últimas publicações</h2>

{% assign recentes = site.publicacoes | sort: "data" | reverse | limit: 3 %}
{% if recentes.size > 0 %}
  <ul class="lista-publicacoes">
    {% for pub in recentes %}
      <li>
        <a href="{{ pub.url | relative_url }}">{{ pub.titulo }}</a>
        <span class="data-publicacao">{{ pub.data | date: "%d/%m/%Y" }}</span>
      </li>
    {% endfor %}
  </ul>
  <p><a href="{{ '/publicacoes/' | relative_url }}" class="link-ver-todos">Ver todas as publicações →</a></p>
{% else %}
  <p class="aviso-vazio">Nenhuma publicação cadastrada ainda.</p>
{% endif %}

<!-- ===========================================================
     PRÓXIMOS EVENTOS (COM IMAGEM EM DESTAQUE)
     =========================================================== -->

<h2>📅 Próximos eventos</h2>

{% assign proximos = site.eventos | sort: "data" | limit: 3 %}
{% if proximos.size > 0 %}

  {% assign primeiro = proximos | first %}
  
  <!-- Evento em DESTAQUE (o primeiro) com imagem -->
  <div class="evento-destaque-home">
    <div class="evento-imagem">
      <!-- 
        IMPORTANTE: substitua "evento-mes-atual.jpg" pelo arquivo de imagem do mês.
        Sugestão: mantenha um padrão como "evento-YYYY-MM.jpg" e atualize mensalmente.
        Exemplo: evento-2026-09.jpg para setembro de 2026
      -->
      <img 
        src="{{ '/assets/images/eventos/evento-mes-atual.jpg' | relative_url }}" 
        alt="{{ primeiro.titulo }}"
        loading="lazy"
      >
      <span class="evento-data-destaque">{{ primeiro.data | date: "%d/%m" }}</span>
    </div>
    <div class="evento-info">
      <h3>{{ primeiro.titulo }}</h3>
      <p class="evento-local">{{ primeiro.local }}</p>
      <p class="evento-descricao">{{ primeiro.descricao | default: "Venha participar!" }}</p>
      <a href="{{ primeiro.url | relative_url }}" class="botao">Saiba mais</a>
    </div>
  </div>

  <!-- Lista dos demais eventos -->
  {% if proximos.size > 1 %}
    <ul class="lista-eventos">
      {% for evento in proximos offset:1 %}
        <li>
          <a href="{{ evento.url | relative_url }}">{{ evento.titulo }}</a>
          <span class="data-evento">{{ evento.data | date: "%d/%m/%Y" }}</span>
          <span class="local-evento">{{ evento.local }}</span>
        </li>
      {% endfor %}
    </ul>
  {% endif %}

  <p><a href="{{ '/eventos/' | relative_url }}" class="link-ver-todos">Ver todos os eventos →</a></p>

{% else %}
  <p class="aviso-vazio">Nenhum evento cadastrado ainda.</p>
{% endif %}

<!-- ===========================================================
     VISITA AUTOGUIADA
     =========================================================== -->

<h2>🚶 Visita autoguiada</h2>
  
<div class="visita-destaque">
  <p>
    Explore a <strong>Coleção Temática de Plantas Medicinais</strong> por conta própria!
    Um roteiro com texto e áudio para você conhecer cerca de 170 espécies medicinais.
  </p>
  <a href="{{ '/colecoes/ctpm/visite/' | relative_url }}" class="botao botao-grande">
    🌿 Iniciar visita autoguiada
  </a>
</div>
