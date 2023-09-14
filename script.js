document.addEventListener('DOMContentLoaded', function () {
    const url = 'https://apisimpsons.fly.dev/api/personajes';
    const resultadoElemento = document.getElementById('resultado');

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            try {
                console.log(data)
                console.log(Object.keys(data).length)
                if (Object.keys(data).length > 0) {
                    let personajesHTML = '';
                    for (const personaje of data) {
                        personajesHTML += `
                        <div>
                            <p class="cat1">Nombre:</p><p>${personaje.Nombre}</p>
                            <p class="cat1">Historia:</p><p>${personaje.Historia}</p>
                            <p class="cat1">Imagen:</p><p><img src="${personaje.Imagen}"></p>
                            <p class="cat1">Género:</p><p>${personaje.Genero}</p>
                            <p class="cat1">Estado:</p><p>${personaje.Estado}</p>
                        </div>
                    `}
                    resultadoElemento.innerHTML = personajesHTML;
                } else {
                    resultadoElemento.innerHTML = 'No se encontraron datos de personajes.';
                }
            } catch (error) {
                console.error('Error al procesar los datos:', error);
            }
        })
        .catch((error) => {
            console.error('Error en la solicitud:', error);
        });

});