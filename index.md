---
title: "Página Inicial"
permalink: /
---

<!-- ===========================================================
     BANNER / INTRODUÇÃO
     Breve apresentação do grupo
     =========================================================== -->

<div class="banner-home">
  <h1>🌿 Grupo de Estudos em Etnobotânica — JBRJ</h1>
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

<h2>Coleções Biológicas</h2>

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
        Acervo vivo com cerca de 170 espécies medicinais que compõe a exposição à céu aberto _Saberes e Olhares Diversos_.
      </p>
      <span class="botao-card">Saiba mais →</span>
    </div>
  </a>

  <!-- CARD 2: RBetno -->
  <a href="{{ '/colecoes/rbetno/index' | relative_url }}" class="card-colecao" style="text-decoration:none;">
    <div class="imagem-colecao-slider" data-carousel="rbetno">
      <img 
        src="{{ '/assets/images/colecoes/rbetno-1.jpg' | relative_url }}" 
        alt="Rede de Etnobotânica - imagem 1"
        class="ativa"
        loading="lazy"
      >
      <img 
        src="{{ '/assets/images/colecoes/rbetno-2.jpg' | relative_url }}" 
        alt="Rede de Etnobotânica - imagem 2"
        loading="lazy"
      >
      <img 
        src="{{ '/assets/images/colecoes/rbetno-3.jpg' | relative_url }}" 
        alt="Rede de Etnobotânica - imagem 3"
        loading="lazy"
      >
    </div>
    
    <div class="conteudo-card-colecao">
      <span class="sigla">RBetno . Dipeq</span>
      <h3>Coleção de Etnobotânica</h3>
      <p class="descricao-colecao">
        Acervo de plantas úteis, bem como pertences e materias com informações relacionadas com ao seu uso.
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
     PRÓXIMOS EVENTOS (COM IMAGEM DINÂMICA POR MÊS)
     =========================================================== -->

<h2>📅 Próximos eventos</h2>

{% assign proximos = site.eventos | sort: "data" | limit: 3 %}
{% if proximos.size > 0 %}

  {% assign primeiro = proximos | first %}
  
  <!-- Evento em DESTAQUE (o primeiro) com imagem dinâmica -->
  <div class="evento-destaque-home">
    <div class="evento-imagem">
      <!-- 
        IMAGEM DINÂMICA POR MÊS:
        - O Liquid detecta o mês e ano atual automaticamente
        - Basta manter imagens com o padrão: evento-YYYY-MM.jpg
        - Exemplo para setembro 2026: evento-2026-09.jpg
        - Se a imagem não existir, usa evento-padrao.jpg como fallback
      -->
      {% assign mes_atual = "now" | date: "%m" %}
      {% assign ano_atual = "now" | date: "%Y" %}
      {% assign nome_imagem = "evento-" | append: ano_atual | append: "-" | append: mes_atual | append: ".jpg" %}
      
      <img 
        src="{{ '/assets/images/eventos/' | append: nome_imagem | relative_url }}" 
        alt="{{ primeiro.titulo }}"
        loading="lazy"
        onerror="this.src='{{ '/assets/images/eventos/evento-padrao.jpg' | relative_url }}'"
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

<div class="visita-destaque">
  <h2>🚶 Visita autoguiada</h2>
  <p>
    Explore a <strong>Coleção Temática de Plantas Medicinais</strong> por conta própria!
    Um roteiro com texto e áudio para você conhecer cerca de 170 espécies medicinais.
  </p>
  <a href="{{ '/colecoes/ctpm/visite/' | relative_url }}" class="botao botao-grande">
    🌿 Iniciar visita autoguiada
  </a>
</div>
