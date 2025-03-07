/* Objetivo
El objetivo es agregar un archivo o varios a tu repositorio y que contenga(n) la solución al problema planteado a continuación.

Problema: Caja de Comentarios (Simple Comment Box)
Crear una caja de comentarios donde los usuarios puedan escribir y agregar comentarios que se muestran en la página. 
Este proyecto ayudará a los estudiantes a manejar eventos de formularios y modificar el contenido de una página.

Instrucciones para resolver el problema:
Crea una página con un formulario que tenga un campo de texto para el comentario y un botón para agregarlo.
Cuando el usuario haga clic en el botón, el comentario debe aparecer en la página debajo del formulario.
Los estudiantes pueden agregar un botón para eliminar comentarios si lo desean.
Los comentarios deben aparecer junto con la fecha y hora de publicación. (opcional) */

document.addEventListener('DOMContentLoaded',() =>{
    const comentarioInput = document.getElementById('comentario');
    const agregarButton = document.getElementById('agregar');
    const lista = document.getElementById('lista-comentarios');

    let comentarios=[];

    agregarButton.addEventListener('click',()=>{
        const comentario= comentarioInput.value.trim();
        if(comentario){
            const nuevoComentario={
                contenido: comentario

            };
            comentarios.push(nuevoComentario);
            AgregarComentario(nuevoComentario,lista);
            comentarioInput.value='';
        }
    });
}
);


function AgregarComentario(nuevoComentario, lista) {
    const nuevoItem = document.createElement('li');
    nuevoItem.textContent = nuevoComentario.contenido;
    
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.style.marginLeft = '10px';
    botonEliminar.addEventListener('click', () => {
        lista.removeChild(nuevoItem);
    });
    
    nuevoItem.appendChild(botonEliminar);
    lista.appendChild(nuevoItem);
}
