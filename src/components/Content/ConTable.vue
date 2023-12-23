<template>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in data" :key="rowIndex">
          <td v-for="(value, colIndex) in row" :key="colIndex" :data-label="headers[colIndex]">
            {{ value }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    headers: {
      type: Array,
      default: () => ["Company", "Contact", "Country"],
    },
    data: {
      type: Array,
      default: () => [
        ["Alfreds Futterkiste", "Maria Anders", "Germany"],
        ["Centro comercial Moctezuma", "Francisco Chang", "Mexico"],
        ["Ernst Handel", "Roland Mendel", "Austria"],
        ["Island Trading", "Helen Bennett", "UK"],
        ["Laughing Bacchus Winecellars", "Yoshi Tannamuri", "Canada"],
      ],
    },
  },
};
</script>

<style scoped>
.table-container {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  overflow: hidden;
}

table thead th {
  color: #fff;
  background: #000;
  padding: 15px;
  border-bottom: 2px solid #000;
  font-weight: bold;
  text-align: left;
}

table tr {
  background: #fff;
  transition: background 0.3s, transform 0.3s;
}

table tr:hover {
  background: #f2f2f2;
  transform: scale(1.02);
}

table tr td {
  border: 1px solid #dcdcdc;
  padding: 15px;
}

@media only screen and (max-width: 640px) {
  table thead {
    display: none;
  }

  table tbody {
    display: block;
  }

  table tbody tr td {
    display: flex;
    align-items: center;
    padding: 0;
  }

  table tbody tr {
    margin-bottom: 20px;
    display: block;
    border: 1px solid #000;
    background: #fff;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    transition: background 0.3s, transform 0.3s;
  }

  table tbody tr:hover {
    background: #f2f2f2;
    transform: scale(1.02);
  }

  table tbody td::before {
    content: attr(data-label);
    font-weight: bold;
    width: 30%;
    display: flex;
    background: #000;
    color: #fff;
    padding: 15px;
    margin-inline-end: 10px;
    border-radius: 5px 0 0 5px;
  }
}
</style>