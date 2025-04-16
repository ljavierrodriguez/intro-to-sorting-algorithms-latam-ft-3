// O(n)

let nombres = ["Hugo", "Paco", "Luis", "Donald", "Mickey", "Minie", "Pluto", "Goofy"]

function buscarElemento(arr, valor){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === valor){
            return i;
        }
    }
    return -1
}

// Doble Bucle Anidado
// O(n^2)

function compararTodos(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            console.log(arr[i], arr[j])
        }
    }
}

// Si n = 8, el total de operaciones sera 8 x 8 = 64