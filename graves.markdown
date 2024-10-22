---
layout: page
title: Graves
permalink: /graves/
show_title: false
---

<div class="welcome-banner">
  <h2>Explore the graves of the Old Ballinacurra Graveyard</h2>
</div>

<div class="home-search">
  <form id="search-form">
    <input type="text" id="search-input" placeholder="Search...">
  </form>
</div>

<div id="table-view" class="view">
  <div class="table-container">
    <table id="graves-table">
      <thead>
        <tr>
          <!-- <th>Grave ID</th>
          <th>Information</th> -->
        </tr>
      </thead>
      <tbody>
        <!-- Table content will be dynamically generated -->
      </tbody>
    </table>
  </div>
</div>

<style>
  body {
    /* font-family: 'Georgia', serif; */
    background-color: #f5f5f5;
    color: #333;
  }

  .welcome-banner {
    text-align: center;
    margin-bottom: 30px;
  }

  .welcome-banner h2 {
    font-size: 1.8em;
    color: #4a4a4a;
  }

  .home-search {
    margin-bottom: 30px;
    text-align: center;
  }

  .home-search input[type="text"] {
    padding: 10px;
    font-size: 16px;
    width: calc(100% - 22px);
    max-width: 300px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
  }

  .table-container {
    width: 100%;
    overflow-x: auto;
  }

  #graves-table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    margin: 20px 0;
    font-size: 0.95em;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }

  #graves-table th,
  #graves-table td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #e0e0e0;
  }

  #graves-table thead tr {
    background-color: #4a4a4a;
    color: #ffffff;
  }

  #graves-table th {
    font-weight: bold;
  }

  #graves-table tbody tr:hover {
    background-color: #f1f1f1;
  }

  @media screen and (max-width: 768px) {
    .welcome-banner h2 {
      font-size: 1.4em;
    }

    #graves-table {
      font-size: 0.85em;
    }

    #graves-table th,
    #graves-table td {
      padding: 8px 10px;
    }
  }
</style>

<script>
  const dataUrl = "{{ '/assets/data/obg_data.json' | relative_url }}";
</script>
<script src="{{ '/assets/js/graves.js' | relative_url }}"></script>
