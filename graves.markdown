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

<!-- Modal Structure -->
<div id="details-modal" class="modal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <h2>Grave Details</h2>
        <div id="modal-details"></div>
    </div>
</div>

<!-- Image Modal -->
<div id="image-modal" class="modal">
    <span class="close image-close">&times;</span>
    <img class="modal-image-content" id="enlarged-image">
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

  /* Modal styling */
  .modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }

  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

  /* Details table styling */
  .details-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }

  .details-table th,
  .details-table td {
    padding: 8px;
    border-bottom: 1px solid #ddd;
    text-align: left;
  }

  .details-table th {
    width: 150px;
    font-weight: bold;
    color: #4a4a4a;
  }

  /* Image gallery styling */
  .image-gallery {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .gallery-item {
    flex: 0 0 200px;
    max-width: 200px;
  }

  .gallery-item img {
    width: 100%;
    height: auto;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  /* Ensure modal content doesn't overflow */
  .modal-content {
    max-height: 80vh;
    overflow-y: auto;
    padding: 20px;
  }
/* Image modal styling */
.modal-image-content {
    margin: auto;
    display: block;
    max-width: 90%;
    max-height: 90vh;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
}

#image-modal {
    background-color: rgba(0, 0, 0, 0.9);
}

#image-modal .close {
    position: absolute;
    right: 35px;
    top: 15px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    cursor: pointer;
}

.gallery-item {
    cursor: pointer;
    transition: transform 0.2s;
}

.gallery-item:hover {
    transform: scale(1.05);
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
