---
layout: default
title: Strain Database
---

# K. phaffii Strain Database

<div class="search-container">
  <input type="text" id="searchInput" placeholder="Search strains..." />
</div>

<div class="table-container">
  <table id="strainsTable">
    <thead>
      <tr>
        <th onclick="sortTable(0)">Strain Name <span class="sort-arrow">↕</span></th>
        <th onclick="sortTable(1)">Strain ID <span class="sort-arrow">↕</span></th>
        <th onclick="sortTable(2)">Other IDs <span class="sort-arrow">↕</span></th>
        <th onclick="sortTable(3)">Genotype <span class="sort-arrow">↕</span></th>
        <th onclick="sortTable(4)">Location <span class="sort-arrow">↕</span></th>
        <th onclick="sortTable(5)">Terms <span class="sort-arrow">↕</span></th>
        <th onclick="sortTable(6)">Notes <span class="sort-arrow">↕</span></th>
      </tr>
    </thead>
    <tbody>
      {% for strain in site.data.strain_database %}
      {% unless forloop.first %}
      <tr>
        <td>{{ strain[0] }}</td>
        <td>{{ strain[1] }}</td>
        <td>{{ strain[2] }}</td>
        <td>{{ strain[3] }}</td>
        <td>{{ strain[4] }}</td>
        <td>{{ strain[5] }}</td>
        <td>{{ strain[6] }}</td>
      </tr>
      {% endunless %}
      {% endfor %}
    </tbody>
  </table>
</div>

<script src="/assets/js/strains.js"></script>