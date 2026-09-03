---

title: "Nossa Equipe"
permalink: /quem-somos/equipe
---

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
