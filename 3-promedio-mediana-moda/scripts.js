// Media aritmética
const lista1 = [
    100,
    200,
    300,
    500,
    50,
];

function calcularMediaAritmetica(lista) {
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    )

    return sumaLista / lista.length;
}

// Mediana
const lista2 = [
    100,
    800,
    200,
    300,
    6000000,
    400,
]

function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function calcularMediana(lista) {
    const mitadLista = parseInt(lista.length / 2);
    const listaOrdenada = lista.sort(function (a, b) {
        return a - b;
    });
    let mediana;

    if (esPar(lista.length)) {
        const elemento1 = listaOrdenada[mitadLista - 1];
        const elemento2 = listaOrdenada[mitadLista];
        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2
        ]);
        mediana = promedioElemento1y2;
    } else {
        mediana = listaOrdenada[mitadLista];
    }
    return mediana;
}

// Moda
const lista3 = [1, 1, 3, 3, 3, 1, 6, 6, 4, 1, 1, 3];

function calcularModa(lista) {
    const listaCount = {};

    lista.map(function (elem) {
        if (listaCount[elem]) {
            listaCount[elem] += 1;
        } else {
            listaCount[elem] = 1;
        }
    })

    const listaArray = Object.entries(listaCount).sort(
        function (a, b) {
            return a[1] - b[1];
        }
    );

    return listaArray[listaArray.length - 1]
}

// Media aritmética ponderada
const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];

const notesWithCredit = notes.map(function (noteObject) {
    return noteObject.note * noteObject.credit;
});

const sumOfNotesWithCredit = notesWithCredit.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

const credits = notes.map(function (notesObject) {
    return notesObject.credit;
});

const sumOfCredits = credits.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
)

const promedioPonderadoNotasConCredito = sumOfNotesWithCredit / sumOfCredits;