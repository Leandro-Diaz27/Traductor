async function traducir() {
    const texto = document.getElementById('texto').value.trim();
    const idiomaOrigen = document.getElementById('idiomaOrigen').value;
    const idiomaDestino = document.getElementById('idiomaDestino').value;
    const resultado = document.getElementById('resultado');
  
    if (!texto) {
      alert("Por favor escribe un texto.");
      return;
    }
  
    if (idiomaOrigen === idiomaDestino) {
      resultado.textContent = texto;
      return;
    }
  
    try {
      const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(texto)}&langpair=${idiomaOrigen}|${idiomaDestino}`;
      const res = await fetch(url);
      const data = await res.json();
  
      resultado.textContent = data.responseData.translatedText;
    } catch (error) {
      resultado.textContent = "Ocurrió un error al traducir. Intenta de nuevo.";
      console.error(error);
    }
  }
  