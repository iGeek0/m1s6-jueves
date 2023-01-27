console.log("Entro index.js");

let paises = [
"Afghanistan",
"Albania",
"Algeria",
"American Samoa",
"Andorra",
"Angola",
"Austria",
"Azerbaijan",
"Bahamas (the)",
"Bahrain",
"Bangladesh",
"Barbados",
"Belarus",
"Belgium",
"Vanuatu",
"Venezuela (Bolivarian Republic of)",
"Viet Nam",
"Virgin Islands (British)",
"Virgin Islands (U.S.)",
"Wallis and Futuna",
"Western Sahara",
"Yemen",
"Zambia",
];

console.log(paises.length);


console.log(paises);

// for (let index = 0; index < paises.length; index++) {
//     const pais = paises[index];
//     let nuevoIndex = index + 1;
//     console.log(`${nuevoIndex}. ${pais}`);
// }

// let nuevoIndex = 0;
// paises.forEach(pais => {
//     nuevoIndex = nuevoIndex + 1;
//     console.log(`${nuevoIndex}. ${pais}`);
// });

// console.log(paises);

// For y foreach NO MODIFICAN EL ARREGLO ORIGINAL

// .map crea un NUEVO ARREGLO

let nuevoArreglo = paises.map(pais => {
    // console.log(pais);
    // sumar
    // otra consulta a base datos....
    // validar datos.....
    return pais.toUpperCase();
});

// console.log('nuevoArreglo: ', nuevoArreglo);
// console.log('paises: ', paises);

let edades = [11,10,19, 25, 35, 40, 15, 55, 34];

// 19, 25, 35, 40, 55, 34
// Retornar un nuevo arreglo con las edad que cumple la mayoria de edad partiendo que es 18

let edadedValidas = edades.map(edad => {
    // return edad;
    if (edad >= 18) {
        return edad + 1;
    } else {
        return edad;
    }

});
console.log("edades: ",edades);
// console.log(edadedValidas);

// Filter crear un NUEVO arreglo UNICAMENTE con los valores que tenga RETURN
let mayoriaEdad = edades.filter(edad => {
    // return edad;
    if (edad >= 18) {
        return edad;
    }
});

console.log("mayoriaEdad: ", mayoriaEdad);


let mayoriaEdadUno = edades.find(edad => {
    // return edad;
    if (edad >= 18) {
        return edad;
    }
});

console.log("mayoriaEdadUno: ", mayoriaEdadUno);


let filtroEspecial = edades.filter(edad => {
    // return edad;
    if (edad >= 18 && edad <= 35) {
        return edad;
    }
});

console.log("filtroEspecial: ", filtroEspecial);

// Reduce lo que es REDUCIR a un valor un arreglo

let sumaEdades = edades.reduce((valorAnterior, valorActual) => {
    return valorActual + valorAnterior;
});

console.log(sumaEdades);






