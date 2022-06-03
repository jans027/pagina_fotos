
let contenedor = document.getElementById('container');


for (let i = 1; i <= 12; i++) {
    let contenedorCreado = document.createElement('div');
    let newImage = document.createElement('img');
    let titulo = document.createElement('h2');
    let subTitulo = document.createElement('h3');

    let pais = prompt("Inserta un pais");
    let ciudad = prompt("Inserta una ciudad");
    const imageUsuario = prompt('Por favor ingresa la URL de tu foto');
    


    newImage.setAttribute('src', imageUsuario);
    newImage.setAttribute('alt', `${pais}`);
    newImage.classList.add('image');
    titulo.textContent = `${pais}`;
    subTitulo.textContent = `${ciudad}`;


    contenedor.appendChild(contenedorCreado);
    contenedorCreado.appendChild(titulo);
    contenedorCreado.appendChild(subTitulo);
    contenedorCreado.appendChild(newImage);

}
contenedor.classList.add('table')