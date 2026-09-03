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
     ÚLTIMAS PUBLICAÇÕES (Home)
     Mostra as 3 publicações mais recentes com autores e ano
     =========================================================== -->

<h2>📄 Últimas publicações</h2>

{% assign publicacoes_recentes = site.publicacoes | sort: "ano" | reverse | limit: 3 %}

{% if publicacoes_recentes.size > 0 %}
  <div class="home-publicacoes">
    {% for pub in publicacoes_recentes %}
      <div class="home-publicacao-item">
        <div class="home-publicacao-info">
          <h3 class="home-publicacao-titulo">
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
          
          {% if pub.autores %}
            <p class="home-publicacao-autores">{{ pub.autores }}</p>
          {% endif %}
          
          <div class="home-publicacao-meta">
            {% if pub.ano %}
              <span class="home-publicacao-ano">{{ pub.ano }}</span>
            {% endif %}
            
            {% if pub.colecao %}
              <span class="home-publicacao-badge">
                {% include badge-colecao.html colecoes=pub.colecao %}
              </span>
            {% endif %}
          </div>
          
          {% if pub.descricao %}
            <p class="home-publicacao-descricao">{{ pub.descricao | truncate: 100 }}</p>
          {% endif %}
        </div>
      </div>
    {% endfor %}
  </div>
  
  <p class="link-ver-todos">
    <a href="{{ '/publicacoes/' | relative_url }}">Ver todas as publicações →</a>
  </p>
  
{% else %}
  <p class="aviso-vazio">Nenhuma publicação cadastrada ainda.</p>
{% endif %}

<!-- ===========================================================
     PRÓXIMOS EVENTOS (Home)
     =========================================================== -->

<h2>📅 Próximos eventos</h2>

{% assign eventos_proximos = site.eventos | sort: "data" | limit: 3 %}

{% if eventos_proximos.size > 0 %}
  <div class="home-eventos">
    {% for evento in eventos_proximos %}
      <div class="home-evento-item">
        <!-- Data -->
        <div class="home-evento-data">
          <span class="home-evento-dia">{{ evento.data | date: "%d" }}</span>
          <span class="home-evento-mes">{{ evento.data | date: "%b" }}</span>
        </div>
        
        <!-- Informações -->
        <div class="home-evento-info">
          <h3 class="home-evento-titulo">
            {% if evento.link %}
              <a href="{{ evento.link }}" target="_blank" rel="noopener noreferrer">
                {{ evento.titulo }}
                <span class="icone-externo">↗</span>
              </a>
            {% elsif evento.url %}
              <a href="{{ evento.url | relative_url }}">{{ evento.titulo }}</a>
            {% else %}
              <span>{{ evento.titulo }}</span>
            {% endif %}
          </h3>
          
          <p class="home-evento-descricao">{{ evento.descricao | default: "Venha participar!" }}</p>
          
          <div class="home-evento-acoes">
            {% if evento.inscricao %}
              <a href="{{ evento.inscricao }}" class="home-evento-botao" target="_blank" rel="noopener noreferrer">
                📝 Inscrever-se
                <span class="icone-externo">↗</span>
              </a>
            {% endif %}
            
            {% if evento.local %}
              <span class="home-evento-local">📍 {{ evento.local }}</span>
            {% endif %}
          </div>
        </div>
      </div>
    {% endfor %}
  </div>
  
  <p class="link-ver-todos">
    <a href="{{ '/eventos/' | relative_url }}">Ver todos os eventos →</a>
  </p>
  
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
