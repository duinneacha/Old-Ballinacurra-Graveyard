---
layout: page
title: Graves
permalink: /graves/
show_title: false
---

<div class="view-toggle">
  <button id="map-view-btn">Map View</button>
  <button id="table-view-btn">Table View</button>
</div>

<div id="map-view" class="view">
  <div class="map-container">
    <img src="{{ '/assets/imgs/grave-map.jpg' | relative_url }}" alt="Map" id="main-map">
    <div class="shade" style="left: 50px; top: 50px; width: 70px; height: 50px;" data-info="Information about Area 1"></div>
    <div class="shade" style="left: 200px; top: 200px; width: 70px; height: 50px;" data-info="Information about Area 2"></div>
    <!-- Add more shaded divs as needed -->
    <div id="info-box"></div>
  </div>
</div>

<div id="table-view" class="view" style="display: none;">
  <table id="graves-table">
    <thead>
      <tr>
        <th>Grave ID</th>
        <th>Information</th>
      </tr>
    </thead>
    <tbody>
      <!-- Table content will be dynamically generated -->
    </tbody>
  </table>
</div>

<style>
  .view-toggle {
    margin-bottom: 20px;
  }

  #graves-table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    font-size: 1em;
    font-family: 'Arial', sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  }

  #graves-table thead tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
  }

  #graves-table th,
  #graves-table td {
    padding: 12px 15px;
  }

  #graves-table tbody tr {
    border-bottom: 1px solid #dddddd;
  }

  #graves-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }

  #graves-table tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
  }

  #graves-table tbody tr.active-row {
    font-weight: bold;
    color: #009879;
  }
</style>

<script>
  const dataUrl = "{{ '/assets/data/vip_grave_list.txt' | relative_url }}";
</script>
<script src="{{ '/assets/js/graves.js' | relative_url }}"></script>
