let listaDeAmigosIngresados = [];

//función para agregar un nombre a la lista
function agregarAmigo() {
    let elementoAmigoHTML = document.getElementById('amigo');
    let nombreIngresado = elementoAmigoHTML.value.trim();

    //validar campo vacío
    if (nombreIngresado === '') {
        alert('Por favor, inserte un nombre.')
    }

    //Agregar el nombre al array
    listaDeAmigosIngresados.push(nombreIngresado);

    //Limpiar input
    elementoAmigoHTML.value = '';

    actualizarLista();
}

//función para mostrar/actualizar lista
function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    //recorro el array y agrego elementos a la lista
    for (let i = 0; i < listaDeAmigosIngresados.length; i++) {
        let ultimoNombreAgregado = listaDeAmigosIngresados[i];
        let agregarLista = document.createElement('li');
        agregarLista.textContent = ultimoNombreAgregado;
        lista.appendChild(agregarLista);
    }
}
