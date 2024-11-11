$(document).ready(function () {
    
    $.ajax({
        url: './js/noticias.json',
        type: 'GET',
        dataType: 'json',  // Corregido: especifica el tipo de datos esperado como JSON
        success: function (data) {
            // Construir el HTML de las noticias
            let htmlNoticias = '';
            data.forEach(noticia => {
                htmlNoticias += `
                    <div class="news-card">
                        <div class="news-card__image">
                            <img src="${noticia.image}" alt="Título" />
                        </div>
                        <h2 class="news-card__title">${noticia.title}</h2>
                        <p class="news-card__description">${noticia.description}</p>
                        <span class="news-card__date">${noticia.date}</span>
                    </div>
                `;
            });
    
            // Insertar el HTML generado en el contenedor de noticias
            $("#news-content").html(htmlNoticias);
        },
        error: function (xhr, status) {
            $("#news-content").html('<div class="not-data-msg">Ocurrió un error al obtener las noticias.</div>');
        }
    });
    

});