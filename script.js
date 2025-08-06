document.addEventListener("DOMContentLoaded", () => {


const boton = document.getElementById("botonAgregar");

boton.addEventListener("click", (e)=>{

    e.preventDefault();

    

    const nombre = document.getElementById("nombreTarea").value.trim();
    const descripcion = document.getElementById("descripcion").value.trim();

    if(!nombre || !descripcion){
        alert("Por favor llena todos los campos")
        return;
    }

    alert(`Has agregado la tarea: " ${nombre}" con éxito`);

    //estructura de targeta

    const tarjeta = document.createElement("div");
    tarjeta.className = "col-md-4 mb-4"

    tarjeta.innerHTML = `
        <div class="card shadow-sm h-100">
        <div class="card-body">
          <h5 class="card-title fw-bold">${nombre}</h5>
          <p class="card-text">${descripcion}</p>
          <button class="btn btn-danger btn-sm eliminar-tarea">Eliminar</button>
        </div>
        </div>
    `;
    // Limpiar formulario
        document.getElementById("nombreTarea").value = "";
        document.getElementById("descripcion").value = "";

        // Agregar funcionalidad al botón de eliminar
        tarjeta.querySelector(".eliminar-tarea").addEventListener("click", () => {
            tarjeta.remove();
        });

    const contenedorTareas = document.getElementById("contenedorTareas");
    contenedorTareas.appendChild(tarjeta)
})
});