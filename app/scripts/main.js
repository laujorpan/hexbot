const API_BASE = 'https://api.noopschallenge.com';
const HEXABOT = `${API_BASE}/hexbot`;

function changeColor() {
    window.fetch(HEXABOT)
    .then(function(response) {
      return response.json();
    }).then(function(responseJson) {
      let color = responseJson.colors[0].value;
      console.log(color)
      document.getElementById('square').style.backgroundColor = `${color}`;
    });
}

