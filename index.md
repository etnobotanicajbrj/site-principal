---

title: "Página Inicial"
permalink: /
---

<!-- \[preencher — descrição breve do grupo] -->

## Coleções

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;">
  <a href="{{ '/colecoes/ctpm/index' | relative\_url }}" class="card-colecao card-ctpm" style="text-decoration:none;">
    <p class="sigla">CTPM . Dicat</p>
    <h3>Coleção Temática de Plantas Medicinais</h3>
  </a>
  <a href="{{ '/colecoes/rbetno/index' | relative\_url }}" class="card-colecao card-rbetno" style="text-decoration:none;">
    <p class="sigla">RBetno . Dipeq</p>
    <h3>Coleção de Etnobotânica</h3>
  </a>
</div>

## Últimas publicações

{% assign recentes = site.publicacoes | sort: "data" | reverse | limit: 3 %}
{% if recentes.size > 0 %}

<ul>
    {% for pub in recentes %}
      <li><a href="{{ pub.url | relative\_url }}">{{ pub.titulo }}</a></li>
    {% endfor %}
  </ul>
{% else %}
  <p class="aviso-vazio">Nenhuma publicação cadastrada ainda.</p>
{% endif %}

## Próximos eventos

{% assign proximos = site.eventos | sort: "data" | limit: 3 %}
{% if proximos.size > 0 %}

<ul>
    {% for evento in proximos %}
      <li><a href="{{ evento.url | relative\_url }}">{{ evento.titulo }}</a></li>
    {% endfor %}
  </ul>
{% else %}
  <p class="aviso-vazio">Nenhum evento cadastrado ainda.</p>
{% endif %}

## Visita autoguiada

<!-- \[preencher — chamada para /colecoes/ctpm/visite/] -->

<a href="{{ '/colecoes/ctpm/visite/' | relative\_url }}" class="botao">Conheça a visita da Coleção</a>

