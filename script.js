document.addEventListener('DOMContentLoaded', function() {
    updateDateTime(); // Actualiza la fecha y hora inmediatamente al cargar
    setInterval(updateDateTime, 1000); // Actualiza la fecha y hora cada segundo
    initArticleCounts(); // Inicializa los contadores de artículos al cargar la página
});

function updateDateTime() {
    const now = new Date();
    const dateString = now.toLocaleTimeString('es-ES', { hour12: false }) + " " + now.toLocaleDateString('es-ES');
    document.getElementById('dateDisplay').textContent = dateString; // Actualiza el display de fecha y hora
}

function addArticle(section) {
    const titleInputId = `title${section.charAt(0).toUpperCase() + section.slice(1)}`;
    const contentInputId = `content${section.charAt(0).toUpperCase() + section.slice(1)}`;
    const articlesDivId = `articles${section.charAt(0).toUpperCase() + section.slice(1)}`;
    const countId = `count${section.charAt(0).toUpperCase() + section.slice(1)}`;

    const title = document.getElementById(titleInputId).value;
    const content = document.getElementById(contentInputId).value;

    if (title && content) {
        const newArticle = document.createElement('div'); // Crea un nuevo contenedor para el artículo
        newArticle.className = 'col'; // Clase Bootstrap para las columnas
        newArticle.innerHTML = `<div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">${title}</h5>
                                        <p class="card-text">${content}</p>
                                    </div>
                                </div>`;
        document.getElementById(articlesDivId).appendChild(newArticle); // Añade el nuevo artículo al div correspondiente
        document.getElementById(titleInputId).value = ''; // Limpia el input de título
        document.getElementById(contentInputId).value = ''; // Limpia el input de contenido
        updateArticleCount(countId); // Actualiza el contador después de añadir un nuevo artículo
    } else {
        alert('Por favor, complete todos los campos para añadir un artículo.');
    }
}

function initArticleCounts() {
    updateArticleCount('countInicio');
    updateArticleCount('countDeporte');
    updateArticleCount('countNegocios');
}

function updateArticleCount(countId) {
    const section = countId.slice(5).toLowerCase();
    const articlesDivId = `articles${section.charAt(0).toUpperCase() + section.slice(1)}`;
    const articles = document.querySelectorAll(`#${articlesDivId} .card`).length; // Selecciona solo elementos '.card' que representan los artículos
    document.getElementById(countId).textContent = `Número de artículos: ${articles}`;
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario
    alert('Mensaje enviado! Gracias por contactar con nosotros.');
    document.getElementById('contactName').value = ''; // Limpia el campo de nombre
    document.getElementById('contactMessage').value = ''; // Limpia el campo de mensaje
});
