

function printPatients(pPatientsList, pSection) {

    numeroPacientes.innerText = pPatientsList.length;

    if (pPatientsList.length != 0) {
        pSection.innerHTML = ''; //esto hace que cada vez que llame a una funcion me borre el resultado de la anterior y solo me pinte la última que pido
        pPatientsList.forEach(patient => {
            printOnePatient(patient, pSection);
        })
        //numeropacientes.innerText += 
    } else {
        pSection.innerHTML = '<h3>NO HAY RESULTADOS QUE CUMPLAN SU BÚSQUEDA</h3>';
    }
}

function printOnePatient(pPatient, pSection) {
    let article = document.createElement('article');
    let h3 = document.createElement('h3');
    let ul = document.createElement('ul');
    let div = document.createElement('div');
    div.classList.add('diagnostico');

    let contenidoh3 = document.createTextNode(`${pPatient.nombre} ${pPatient.apellidos}`);
    h3.appendChild(contenidoh3)
    //otra opcion, insertar directamente el texto
    div.innerText = pPatient.diagnostico;

    //contenido ul
    let li1 = document.createElement('li')
    let li2 = document.createElement('li')

    li1.innerText = `EDAD: ${pPatient.edad}`;
    li2.innerText = `NUMERO SEGURIDAD SOCIAL: ${pPatient.numeroSS}`;

    ul.appendChild(li1);
    ul.appendChild(li2);

    //meto todo en el article
    article.appendChild(h3);
    article.appendChild(ul);
    article.appendChild(div);

    pSection.appendChild(article);
}


function filterPatientsByAge(pPatientsList, pMinAge, pMaxAge) {
    const result = pPatientsList.filter(patient => patient.edad >= pMinAge && patient.edad <= pMaxAge);
    return result;
}


function filterPatientsByDiagnosis(pPatientsList, pDiagnosis) {
    const result = pPatientsList.filter(patient => patient.diagnostico.toLowerCase() == pDiagnosis.toLowerCase());
    return result;
}


function filterByLastNumberSS(pPatientsList, pNumber) {
    const result = pPatientsList.filter(patient => {
        let numeroSS = patient.numeroSS;
        //numeroSS.length-1 la última posicion del String
        let ultimoDigito = numeroSS[numeroSS.length - 1];
        return parseInt(ultimoDigito) == pNumber;
    })

    return result;
}


function filterPatientsByWord(pPatientsList, pWordSearch) {

    const filterList = pPatientsList.filter(patient => {
        let fullName = patient.nombre + ' ' + patient.apellidos;
        return fullName.toLowerCase().includes(pWordSearch.toLowerCase());
    })

    return filterList;
}





//printPatients(listadoPacientes, seccionPacientes)
//printPatients(filterPatientsByDiagnosis(listadoPacientes, 'asma'), seccionPacientes)
//printPatients(filterByLastNumberSS(listadoPacientes, 6), seccionPacientes)
