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

