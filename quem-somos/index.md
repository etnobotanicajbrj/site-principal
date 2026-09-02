---

title: "Quem Somos"
permalink: /quem-somos/
---

<nav class="sumario-quem-somos">
  <a href="#grupo-pesquisa">O Grupo de Pesquisa</a> ·
  <a href="#programa">O Programa</a> ·
  <a href="#equipe">Nossa Equipe</a> ·
  <a href="#compromissos">Compromissos</a>
</nav>

<section id="grupo-pesquisa">
  <h2>O Grupo de Pesquisa</h2>
  <!-- Responsável: Camila -->
  <!-- \[preencher — espelho CNPq: título oficial, objetivos, linha de pesquisa, histórico] -->
</section>

<section id="programa">
  <h2>O Programa</h2>
  <!-- Responsável: Kaique -->
  <!-- \[preencher — missão, história, justificativa do Programa de Extensão] -->
</section>

<section id="equipe">
  <h2>Nossa Equipe</h2>
  <div class="grid-equipe">
    {% for pessoa in site.data.equipe %}
      <div class="card-pessoa">
        <img src="{{ pessoa.foto | relative\_url }}" alt="{{ pessoa.nome }}">
        <p class="nome-pessoa">{{ pessoa.nome }}</p>
        <p class="funcao-pessoa">{{ pessoa.funcao }}</p>
        {% include badge-colecao.html colecoes=pessoa.colecoes %}
      </div>
    {% endfor %}
  </div>
</section>

<section id="compromissos">
  <h2>Compromissos</h2>
  <!-- \[preencher — ODS 3, 4, 15 / diretorias Dipeq e Dicat] -->
</section>

