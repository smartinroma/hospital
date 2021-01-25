/* Cosas para practicar 

    1. Selector se rellenen por javascript
*/



//Filtro edad eventos

let brnFiltrar = document.getElementById('btnFiltrar');
let edadMin = document.querySelector('#edadminima');
let edadMax = document.querySelector('#edadmaxima');
let seccionPacientes = document.querySelector('#pacientes');
let numeroPacientes = document.getElementById('numeropacientes');


btnFiltrar.addEventListener('click', getDataFilterAge);

//Cargamos inicialmente todos los pacientes
printPatients(listadoPacientes, seccionPacientes);

function getDataFilterAge(event) {
    event.preventDefault();//siempre que sea un input submit o un a, poner este evento

    let edadminima = parseInt(edadMin.value);//con el value recojo la informacion del formulario
    let edadmaxima = parseInt(edadMax.value);

    if (edadminima == -1 || edadmaxima == -1) {
        alert('Los campos no pueden estar vacios');

    } else if (edadminima <= edadmaxima) {
        //llamar a las funciones
        const listaFiltrada = filterPatientsByAge(listadoPacientes, edadminima, edadmaxima);

        //pintar la lista
        printPatients(listaFiltrada, seccionPacientes);

    } else {

        alert('La edad minima no puede ser superior a la edad maxima');
    }

}

//Filtro diagnóstico

let selectDiagnostico = document.querySelector('#diagnostico');

//elimino los elementos duplicados de mi array de enefermedades
//creo un array de enfermedades vacio donde voy a meter todas las enfermedades de los pacientes
const enfermedades = new Array();

for (paciente of listadoPacientes) {
    enfermedades.push(paciente.diagnostico);
}

let set = new Set(enfermedades);//elimina valores duplicados del array, pero no es un array y no se puede recorrer

const diagnosticos = Array.from(set)//me convierte el set en un array

diagnosticos.forEach(diagnostico => {
    selectDiagnostico.innerHTML += `<option value="${diagnostico}">${diagnostico}</option>`;
})

//Lanzamos el evento para capturar la enfermedad

selectDiagnostico.addEventListener('change', event => { //función flecha
    //event.target.value; devuelve el valor del select
    printPatients(filterPatientsByDiagnosis(listadoPacientes, event.target.value), seccionPacientes);
})


//Filtro de búsqueda por palabra
let buscador = document.querySelector('#buscador');

buscador.addEventListener('input', recogerBusqueda);

function recogerBusqueda(event) {
    let palabraBuscar = event.target.value.trim();

    let listaFiltrada = filterPatientsByWord(listadoPacientes, palabraBuscar);
    printPatients(listaFiltrada, seccionPacientes);
}