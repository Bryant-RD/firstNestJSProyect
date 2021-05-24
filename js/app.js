import { consultarCitas, eliminarCita, newCita, editarCita, consultarCita} from "./API.js";

//Selectores
const namePetInput = document.querySelector("#mascota");
const nameOwnerInput = document.querySelector("#propietario");
const callNumberInput = document.querySelector("#telefono");
const dateInput = document.querySelector("#fecha");
const hourInput = document.querySelector("#hora");
const descriptionInput = document.querySelector("#sintomas");
const contenedorCitas = document.querySelector('#citas');
const formulario = document.querySelector("#nueva-cita");

let editando = false;


//Eventos
document.addEventListener('DOMContentLoaded', mostrarCitas);
formulario.addEventListener('submit', crearCita);

//Funciones
async function mostrarCitas() {

    const citas = await consultarCitas();
    const lista = citas.cita;

    lista.forEach(cita => {
        const {_id, namePet, NameOwner, callNumber, hour, description, date} = cita;
        const divCita = document.createElement('div');
            divCita.classList.add('cita', 'p-3');

            // Scripting de los elementos de la cita
            const mascotaParrafo = document.createElement('h2');
            mascotaParrafo.classList.add('card-title', 'font-weight-bolder');
            mascotaParrafo.textContent = namePet;

            const propietarioParrafo = document.createElement('p');
            propietarioParrafo.innerHTML = `<span class="font-weight-bolder">Propietario: </span> ${NameOwner}`;

            const telefonoParrafo = document.createElement('p');
            telefonoParrafo.innerHTML = `<span class="font-weight-bolder">Telefono: </span> ${callNumber}`;

            const fechaParrafo = document.createElement('p');
            fechaParrafo.innerHTML = `<span class="font-weight-bolder">Fecha: </span> ${date}`;
            
            const horaParrafo = document.createElement('p');
            horaParrafo.innerHTML = `<span class="font-weight-bolder">Hora: </span> ${hour}`;

            const sintomasParrafo = document.createElement('p');
            sintomasParrafo.innerHTML = `<span class="font-weight-bolder">Sintomas: </span> ${description}`;

            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('btn', 'btn-danger', 'mr-2');
            btnEliminar.innerHTML = 'Eliminar';

            const btnEditar = document.createElement('button');
            btnEditar.classList.add('btn', 'btn-info');
            btnEditar.innerHTML = 'Editar';

            btnEliminar.onclick = () => eliminarCita(_id);
            btnEditar.onclick = () => cargarEdicion(_id);
            
            //Agregar los datos al divCita
            divCita.appendChild(mascotaParrafo);            
            divCita.appendChild(propietarioParrafo);
            divCita.appendChild(telefonoParrafo);
            divCita.appendChild(fechaParrafo);
            divCita.appendChild(horaParrafo);
            divCita.appendChild(sintomasParrafo);
            divCita.appendChild(btnEliminar);
            divCita.appendChild(btnEditar);

            //Agrega las citas al HTML
            contenedorCitas.appendChild(divCita);
    });
}

async function crearCita(e) {
    e.preventDefault();


    const objCita = {
        namePet : namePetInput.value,
        NameOwner: nameOwnerInput.value,
        callNumber: callNumberInput.value,
        hour: hourInput.value,
        description: descriptionInput.value,
        date: dateInput.value
    }

    if (document.querySelector(".crearCita")) {
         console.log("crear");
         newCita(objCita);        
    }


}

function cargarEdicion(id) {

    document.querySelector('button[type="submit"]').classList.add("editarCita");
    document.querySelector('button[type="submit"]').classList.remove("crearCita");

    document.querySelector('button[type="submit"]').textContent = 'Guardar cambios';

    //Llenando los inputs
    consultarCita(id).then( respuesta => { 
        
        namePetInput.value = respuesta.cita.namePet;
        nameOwnerInput.value = respuesta.cita.NameOwner;
        callNumberInput.value = respuesta.cita.callNumber;
        hourInput.value = respuesta.cita.hour;
        descriptionInput.value = respuesta.cita.description;
        // dateInput.value = respuesta.cita.date;
    })

    
            document.querySelector(".editarCita").onclick = () => { 
        
            const objCita = {
                namePet : namePetInput.value,
                NameOwner: nameOwnerInput.value,
                callNumber: callNumberInput.value,
                hour: hourInput.value,
                description: descriptionInput.value,
                date: dateInput.value
            }
    
            editarCita(id, objCita)
            // console.log(objCita);
            document.querySelector('button[type="submit"]').classList.remove("editarCita");
        }

}