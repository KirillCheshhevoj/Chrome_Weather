chrome.storage.sync.get("city", ({city}) => {
    const cityId = city || '625144';
    const apiKey = '22a5b0cc6aff0273589c77d00a68b745';

    fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      const temp = data.main.temp;
      const newsItems = document.querySelectorAll('article h2');
      newsItems.forEach(item => {
        const button = document.createElement('button');
        button.innerText = 'Q';
        item.appendChild(button);
        button.addEventListener("click", function() {
          alert(`Weather: ${temp}`);
        })
      });
});
});
