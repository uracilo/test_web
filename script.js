// PASO 1: Comprobar que el script está conectado
console.log('1. Script cargado correctamente.');

// PASO 2: Referenciar el contenedor del DOM
const contenedor = document.getElementById('contenedor-personajes');
console.log('2. Contenedor encontrado en el DOM:', contenedor);

// PASO 3: Función asíncrona para llamar a la API
async function obtenerPersonajes() {
  console.log('3. Iniciando petición a la API de Rick and Morty...');

  try {
    const respuesta = await fetch('https://rickandmortyapi.com/api/character');
    const datos = await respuesta.json();

    // Ver en la consola los datos que devuelve la API
    console.log('4. Datos recibidos de la API:', datos);
    console.log('Array de personajes:', datos.results);

    // PASO 4: Pintar los personajes en el HTML
    pintarPersonajes(datos.results);

  } catch (error) {
    console.error('Error al obtener los datos:', error);
    contenedor.innerHTML = '<p>Error al cargar los personajes.</p>';
  }
}

// PASO 5: Función para generar el HTML dinámico
function pintarPersonajes(personajes) {
  console.log('5. Comenzando a pintar personajes en el DOM...');

  let tarjetasHTML = '';

  personajes.forEach(personaje => {
    // Template string para armar cada tarjeta
    tarjetasHTML += `
      <article class="card">
        <img src="${personaje.image}" alt="${personaje.name}">
        <div class="card-info">
          <h3>${personaje.name}</h3>
          <p class="status">${personaje.status} - ${personaje.species}</p>
        </div>
      </article>
    `;
  });

  // Insertar todo el HTML de golpe en el contenedor
  contenedor.innerHTML = tarjetasHTML;
  console.log('6. ¡Personajes pintados con éxito!');
}

// PASO 6: Ejecutar la función inicial
obtenerPersonajes();
