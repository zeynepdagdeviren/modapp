const modlar = [
    "beach",
    "birds",
    "cafe",
    "campfire",
    "city",
    "fireplace",
    "forest",
    "heavy-rain",
    "night-crickets",
    "rain-camping",
    "rain",
    "rain-windshield",
    "snow",
    "thunder",
    "train",
  ];
  
  const calanModlar = [];
  
  const kokEleman = document.querySelector("#root");
  const bilgiEleman = document.querySelector("#bilgi");
  
  function renderKartlar() {
    kokEleman.innerHTML = "";
  
    modlar.forEach((eleman) => {
      const HTMLSablon = `
        <div class="kart" data-mod="${eleman}">
          <img src="img/${eleman}.jpg">
          <h2>${eleman.replace("-", " ")}</h2>
          <audio loop src="audio/${eleman}-sound.mp3"></audio>
        </div>
      `;
  
      kokEleman.insertAdjacentHTML("beforeend", HTMLSablon);
    });
  
    sesOlaylari();
  }
  
  function sesOlaylari() {
    const kartlar = document.querySelectorAll(".kart");
    kartlar.forEach((kartElemani) => {
      kartElemani.addEventListener("click", () => {
        const kartSesi = kartElemani.querySelector("audio");
  
        if (!kartSesi.paused) {
          // Ses çalıyorsa durdur
          kartSesi.pause();
          kartElemani.classList.remove("aktif");
  
          // Çalan modlar listesinden kaldır
          const modIndex = calanModlar.findIndex((elem) => elem === kartElemani.dataset.mod);
          calanModlar.splice(modIndex, 1);
        } else {
          // Ses çalmıyorsa başlat
          kartSesi.play();
          kartElemani.classList.add("aktif");
  
          // Çalan modlara ekle
          calanModlar.push(kartElemani.dataset.mod);
        }
  
        renderBilgi();
      });
    });
  }
  
  function renderBilgi() {
    const calanModlarMetni = calanModlar.join(", ");
    bilgiEleman.innerHTML = `
      Şu an çalıyor: ${calanModlarMetni ? calanModlarMetni : "Hiçbir mod çalmıyor"} (${calanModlar.length})
    `;
  }
  
  renderKartlar();
  renderBilgi();
  














































