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
    <!-- <button type="button" id="find-button">Find</button> -->
    </form>
</div>

<div class="view-toggle">
  <button id="map-view-btn">Map View</button>
  <button id="table-view-btn">Table View</button>
</div>

<div id="map-view" class="view">
  <div class="map-container">
    <img src="{{ '/assets/imgs/grave-map-worked.jpg' | relative_url }}" alt="Map" id="main-map">
    <div class="shade" style="left: 50px; top: 50px; width: 70px; height: 50px;" data-info="Information about Area 1"></div>
    <div class="shade" style="left: 200px; top: 200px; width: 70px; height: 50px;" data-info="Information about Area 2"></div>
    <!-- Add more shaded divs as needed -->
    <div id="info-box"></div>
  </div>
</div>

<div id="table-view" class="view" style="display: none;">
  <div class="table-container">
    <table id="graves-table">
      <!-- <thead>
        <tr>
          <th>Grave ID</th>
          <th>Information</th>
        </tr>
      </thead> -->
      <tbody>
        <!-- Table content will be dynamically generated -->
      </tbody>
    </table>
  </div>
</div>

<style>
  /* Search  */
  .home-search {
    margin-bottom: 20px;
    text-align: center;
  }

  .home-search input[type="text"] {
    padding: 10px;
    font-size: 16px;
    width: calc(100% - 20px);
    max-width: 300px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 10px;
    margin-bottom: 10px;
  }

  .home-search button {
    background-color: #006400;
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  .view-toggle {
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .view-toggle button {
    background-color: #006400;
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    margin: 5px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    flex: 1;
    max-width: 150px;
  }

  .view-toggle button:hover {
    background-color: #004d00;
  }

  /* Map Container */
  .map-container {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  #main-map {
    width: 100%;
    height: auto;
    display: block;
  }

  .shade {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }

  #info-box {
    position: absolute;
    background-color: white;
    border: 1px solid #ccc;
    padding: 10px;
    display: none;
    max-width: 80%;
    word-wrap: break-word;
  }

  /* Table Container */
  .table-container {
    width: 100%;
    overflow-x: auto;
  }

  #graves-table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    font-size: 0.9em;
    font-family: 'Arial', sans-serif;
    min-width: 300px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  }

  #graves-table th, #graves-table td {
    padding: 10px 12px;
    border: 1px solid #ccc;
    text-align: left;
  }

  #graves-table thead tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
  }

  #graves-table tbody tr {
    border-bottom: 1px solid #dddddd;
  }

  #graves-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }

  /* Responsive adjustments */
  @media screen and (max-width: 768px) {
    .home-search input[type="text"] {
      width: calc(100% - 20px);
      margin-right: 0;
    }

    .view-toggle button {
      width: calc(50% - 10px);
      margin: 5px;
    }

    #graves-table {
      font-size: 0.8em;
    }

    #graves-table th, #graves-table td {
      padding: 6px 8px;
    }

    .welcome-banner h2 {
      font-size: 1.2em;
    }
  }
</style>
<script>
  const dataUrl = "{{ '/assets/data/vip_grave_list.txt' | relative_url }}";
</script>
<script src="{{ '/assets/js/graves.js' | relative_url }}"></script>
