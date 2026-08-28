---
layout: page
permalink: /publications/
title: Publications
description: Publications organized by research topic, with a chronological view.
years: [2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2012, 2011]
show_publication_tags: true
nav: true
---

<div class="publications publications-page" data-publications>

  <div class="publication-controls">
    <p class="publication-controls-label">Browse publications</p>
    <div class="publication-filters" role="group" aria-label="Filter publications">
      <button type="button" class="publication-filter is-active" data-publication-filter="all" aria-pressed="true">All topics</button>
      <button type="button" class="publication-filter" data-publication-filter="stochastic" aria-pressed="false">Stochastic approximation</button>
      <button type="button" class="publication-filter" data-publication-filter="rl" aria-pressed="false">Reinforcement learning</button>
      <button type="button" class="publication-filter" data-publication-filter="games" aria-pressed="false">Games &amp; multi-agent learning</button>
      <button type="button" class="publication-filter" data-publication-filter="bandits" aria-pressed="false">Bandits &amp; online decisions</button>
      <button type="button" class="publication-filter" data-publication-filter="networks" aria-pressed="false">Stochastic networks</button>
      <button type="button" class="publication-filter publication-filter-secondary" data-publication-filter="years" aria-pressed="false">All by year</button>
    </div>
    <p class="publication-filter-status sr-only" aria-live="polite"></p>
  </div>

  <div class="publication-topic-view" data-publication-topic-view>
    <section class="publication-topic" data-publication-topic="stochastic">
      <header class="publication-topic-header">
        <p class="publication-topic-number" aria-hidden="true">01</p>
        <div>
          <h2>Stochastic Approximation, Optimization, and Probability</h2>
          <p>Learning dynamics, constant-stepsize methods, stochastic optimization, coupling, and probabilistic foundations.</p>
        </div>
      </header>
      {% bibliography -f papers -q @*[topic=stochastic]* %}
    </section>

    <section class="publication-topic" data-publication-topic="rl">
      <header class="publication-topic-header">
        <p class="publication-topic-number" aria-hidden="true">02</p>
        <div>
          <h2>Reinforcement Learning and MDPs</h2>
          <p>Theory and algorithms for sequential decision-making, including average-reward, offline, stable, and risk-sensitive reinforcement learning.</p>
        </div>
      </header>
      {% bibliography -f papers -q @*[topic=rl]* %}
    </section>

    <section class="publication-topic" data-publication-topic="games">
      <header class="publication-topic-header">
        <p class="publication-topic-number" aria-hidden="true">03</p>
        <div>
          <h2>Games and Multi-Agent Learning</h2>
          <p>Learning in Markov and mean-field games, equilibrium computation, robustness, and adversarial manipulation.</p>
        </div>
      </header>
      {% bibliography -f papers -q @*[topic=games]* %}
    </section>

    <section class="publication-topic" data-publication-topic="bandits">
      <header class="publication-topic-header">
        <p class="publication-topic-number" aria-hidden="true">04</p>
        <div>
          <h2>Bandits and Online Decision-Making</h2>
          <p>Pure exploration, representation learning, restless bandits, online pricing, and decision-making under nonstationarity.</p>
        </div>
      </header>
      {% bibliography -f papers -q @*[topic=bandits]* %}
    </section>

    <section class="publication-topic" data-publication-topic="networks">
      <header class="publication-topic-header">
        <p class="publication-topic-number" aria-hidden="true">05</p>
        <div>
          <h2>Stochastic Networks</h2>
          <p>Queueing systems, service systems, scheduling, load balancing, bin packing, and network resource allocation.</p>
        </div>
      </header>
      {% bibliography -f papers -q @*[topic=networks]* %}
    </section>
  </div>

  <section class="publication-year-view" data-publication-year-view hidden>
    <header class="publication-topic-header publication-year-header">
      <p class="publication-topic-number" aria-hidden="true">A–Z</p>
      <div>
        <h2>All Publications by Year</h2>
        <p>The complete publication list in reverse chronological order.</p>
      </div>
    </header>

    {% for y in page.years %}
      <h3 class="year">{{y}}</h3>
      {% bibliography -f papers -q @*[year={{y}}]* %}
    {% endfor %}
  </section>

</div>

<script src="{{ '/assets/js/publications.js' | relative_url }}"></script>
