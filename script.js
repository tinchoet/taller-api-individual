document.getElementById('btn').addEventListener('click', listaPersonajes);

async function listaPersonajes() {
  const apiUrl = 'https://apisimpsons.fly.dev/api/personajes';

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const characterListElement = document.getElementById('lista');
    characterListElement.innerHTML = '';

    data.docs.forEach((character) => {
      const caja = document.createElement('div');
      caja.className = 'caja';

      const image = document.createElement('img');
      image.src = character.Imagen; 
      image.alt = character.Nombre; 

      const name = document.createElement('span');
      name.textContent = character.Nombre;

      caja.appendChild(image);
      caja.appendChild(name);

      characterListElement.appendChild(caja);
    });
  } catch (error) {
    console.error('Error al obtener la lista de personajes:', error);
  }
}   