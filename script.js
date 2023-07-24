/*
    ====================================================
    ============= LÓGICA DE LA CALCULADORA =============
    ====================================================
*/ 

// Obtener el elemento de resultado
let result  = document.getElementById("result");

// Ingresar números al presionar una tecla
function input(num){
    let number = result.value;
    result.value = number + num;
}

// Lógica de la calculadora
function calc(){
    if(result.value != ""){
        let result2  = result.value;
        result.value = eval(result2)
    } else{
        alert("Erro! Adicione valores válidos.")
    }
}

// Botón de reinicio
function reset(){
    result.value = "";
}

// Botón de borrar
function del(){
    let result2  = result.value;
    result.value = result2.substring(0, result2.length - 1);
}

//Botón Funcionalidad Temperatura
function funcionalidadTemperatura(){
    //Utilizamos SweetAlert2 para esta Funcionalidad
    Swal.fire({
        title: 'Ingrese la temperatura en grados centígrados:',
        input: 'text',
        inputAttributes: {
            type: 'number',
            step: '0.01', // Ajusta la precisión del número 
        },
        showCancelButton: true,
        confirmButtonColor: '#2b3242',
        confirmButtonText: 'Convertir a Fahrenheit',
        cancelButtonText: 'Cancelar',
        showLoaderOnConfirm: true,
        preConfirm: (tempC) => {
            if (!tempC || isNaN(tempC)) {
                Swal.showValidationMessage('Ingrese una temperatura válida');
            }
            return tempC;
        },
    }).then((result) => {
        if (result.isConfirmed) {
            let tempC = parseFloat(result.value);
            let tempF = centigrados_fahrenheit(tempC);
            result.value = tempF.toFixed(2);
            Swal.fire({
                title: 'Temperatura en Fahrenheit:',
                html: `<strong>${tempF.toFixed(2)} °F</strong>`,
                icon: 'success',
                confirmButtonColor: '#2b3242',
            });
        }
    });   
}
//Botón Funcionalidad Presión
function funcionalidadPresion(){
    //Utilizamos SweetAlert2 para esta Funcionalidad
    Swal.fire({
        title: 'Ingrese la presión en Pascal:',
        input: 'text',
        inputAttributes: {
            type: 'number',
            step: '0.01',
        },
        showCancelButton: true,
        confirmButtonColor: '#2b3242',
        confirmButtonText: 'Convertir a Bar',
        cancelButtonText: 'Cancelar',
        showLoaderOnConfirm: true,
        preConfirm: (tempPa) => {
            if (!tempPa || isNaN(tempPa)) {
                Swal.showValidationMessage('Ingrese una presión válida');
            }
            return tempPa;
        },
    }).then((result) => {
        if (result.isConfirmed) {
            let tempPa = parseFloat(result.value);
            let tempBar = pascal_bar(tempPa);
            result.value = tempBar;
            Swal.fire({
                title: 'Presión en Bar:',
                html: `<strong>${tempBar} Bar</strong>`,
                icon: 'success',
                confirmButtonColor: '#555',
            });
        }
    });
}

//Botón Funcionalidad Masa
function funcionalidadMasa(){
    //Utilizamos SweetAlert2 para esta Funcionalidad
    Swal.fire({
        title: 'Ingrese la masa en Kilogramos:',
        input: 'text',
        inputAttributes: {
            type: 'number',
            step: '0.01',
        },
        showCancelButton: true,
        confirmButtonColor: '#2b3242',
        confirmButtonText: 'Convertir a Gramos',
        cancelButtonText: 'Cancelar',
        showLoaderOnConfirm: true,
        preConfirm: (tempKg) => {
            if (!tempKg || isNaN(tempKg)) {
                Swal.showValidationMessage('Ingrese una masa válida');
            }
            return tempKg;
        },
    }).then((result) => {
        if (result.isConfirmed) {
            let tempKg = parseFloat(result.value);
            let tempGram = kilogramo_gramo(tempKg);
            result.value = tempGram.toFixed(2);
            Swal.fire({
                title: 'Masa en Gramos:',
                html: `<strong>${tempGram.toFixed(2)} g</strong>`,
                icon: 'success',
                confirmButtonColor: '#555',
            });
        }
    });
}


//Función que calcula la conversión de Grados Centígrados a Fahrenheit
function centigrados_fahrenheit(centigrados){
    return (centigrados * 9 / 5) + 32;
}

//Función que calcula la conversión de Pascal a Bar
function pascal_bar(pascal){
    return (pascal / 100000).toExponential();
}

//Función que calcula la conversión de Kilos a Gramos
function kilogramo_gramo(kilogramo) {
    return kilogramo * 1000; 
}
/*
    ====================================================
    ================== CAMBIO DE TEMA ==================
    ====================================================
*/

// Todos los colores para diferentes temas
const theme = {
    defaul(){
        root.style.setProperty('--background'          , '#3a4764');
        root.style.setProperty('--background-dark'     , '#232c43');
        root.style.setProperty('--background-very-dark', '#182034');
        
        root.style.setProperty('--key-color-top'       , '#ffffff');
        root.style.setProperty('--key-color-bottom'    , '#3a4764');
        root.style.setProperty('--key-background'      , '#eae3dc');
        root.style.setProperty('--key-background-dark' , '#dfd9d2');
        root.style.setProperty('--key-shadow'          , '#b4a597');

        root.style.setProperty('--key-blue-background' , '#637097');
        root.style.setProperty('--key-blue-shadow'     , '#404e72');

        root.style.setProperty('--key-red-background'  , '#d03f2f');
        root.style.setProperty('--key-red-shadow'      , '#93261a');
    },
    light(){
        root.style.setProperty('--background'          , '#e6e6e6');
        root.style.setProperty('--background-dark'     , '#d3cdcd');
        root.style.setProperty('--background-very-dark', '#eeeeee');
        
        root.style.setProperty('--key-color-top'       , '#3d3d33');
        root.style.setProperty('--key-color-bottom'    , '#3d3d33');
        root.style.setProperty('--key-background'      , '#e5e4e0');
        root.style.setProperty('--key-background-dark' , '#dfd9d2');
        root.style.setProperty('--key-shadow'          , '#b4a597');

        root.style.setProperty('--key-blue-background' , '#388187');
        root.style.setProperty('--key-blue-shadow'     , '#1c6166');

        root.style.setProperty('--key-red-background'  , '#d03f2f');
        root.style.setProperty('--key-red-shadow'      , '#93261a');
    },
    dark(){
        root.style.setProperty('--background'          , '#17062a');
        root.style.setProperty('--background-dark'     , '#1e0836');
        root.style.setProperty('--background-very-dark', '#1e0836');
        
        root.style.setProperty('--key-color-top'       , '#f7de43');
        root.style.setProperty('--key-color-bottom'    , '#f7de43');
        root.style.setProperty('--key-background'      , '#331b4d');
        root.style.setProperty('--key-shadow'          , '#851c9c');

        root.style.setProperty('--key-blue-background' , '#56077c');
        root.style.setProperty('--key-blue-shadow'     , '#851c9c');

        root.style.setProperty('--key-red-background'  , '#00decf');
        root.style.setProperty('--key-red-shadow'      , '#00decf');
    }
}

// Obtener el elemento raíz
var root = document.querySelector(':root');

// Verificar la preferencia de temas del usuario
const darkThemeMq  = window.matchMedia("(prefers-color-scheme: dark)");
const lightThemeMq = window.matchMedia("(prefers-color-scheme: light)");

// Cambiar el tema según los resultados anteriores
if (darkThemeMq.matches) {
    document.getElementById('btnTheme').value = "3";
    theme.dark();
} else if(lightThemeMq.matches){
    document.getElementById('btnTheme').value = "2";
    theme.light();    
} else {
    document.getElementById('btnTheme').value = "1";
    theme.defaul();    
}

// Crear una función para recibir el valor del rango de entrada
function myFunction_set(val) {
    // Recibir el valor del input tipo rango
    document.getElementById('btnTheme').value = val; 

    // Cambiar el tema según los resultados anteriores
    if(val == 1){
        theme.defaul();
    } 
     
    else if(val == 2){
        theme.light();
    }
    
    else{
        theme.dark();
    } 
  
}


