// Metodos de Ordenamientos
// Bubble Sort = O(n^2)
let numeros = [1000, 45, 32, 12, 1, 900, 456, 230, 24, 560, 349, 5]
// [45, 1000, 32, 12, 1, 900, 456, 230, 24, 560, 349, 5]
// [45, 32, 1000, 12, 1, 900, 456, 230, 24, 560, 349, 5]
// [45, 32, 12, 1000, 1, 900, 456, 230, 24, 560, 349, 5]
// [45, 32, 12, 1, 1000, 900, 456, 230, 24, 560, 349, 5]
// [45, 32, 12, 1, 900, 1000, 456, 230, 24, 560, 349, 5]
// [45, 32, 12, 1, 900, 456, 1000, 230, 24, 560, 349, 5]
// [45, 32, 12, 1, 900, 456, 230, 1000, 24, 560, 349, 5]
// [45, 32, 12, 1, 900, 456, 230, 24, 1000, 560, 349, 5]
// [45, 32, 12, 1, 900, 456, 230, 24, 560, 1000, 349, 5]
// [45, 32, 12, 1, 900, 456, 230, 24, 560, 349, 1000, 5]
// [45, 32, 12, 1, 900, 456, 230, 24, 560, 349, 5, 1000]
// [32, 45, 12, 1, 900, 456, 230, 24, 560, 349, 5, 1000]
// [32, 12, 45, 1, 900, 456, 230, 24, 560, 349, 5, 1000]
// [32, 12, 1, 45, 900, 456, 230, 24, 560, 349, 5, 1000]


function bubbleSort(arr = []) {
    const len = arr.length

    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }

    return arr
}

function bubbleSort2(arr = []){
    let wall = arr.length - 1
    while (wall > 0){
        for(let i = 0; i < wall; i++){
            if (arr[i] > arr[i + 1]) {
                const temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
        wall--
    }
}

console.log(numeros)
console.time()
console.log(bubbleSort([...numeros]))
console.timeEnd()

let numeros2 = [6, 45, 32, 12, 5, 900, 456, 230, 24, 560, 349, 1]
let numeros3 = [45, 32, 12, 900, 456, 230, 24, 560, 349]
function quickSort(arr = []){
    if(arr.length <= 1){
        return arr
    }

    const pivot = arr[0]
    const left = []
    const right = []


    for(let i = 1; i < arr.length; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    //return [1, 5, 6, 45, 32, 12, 900, 456, 230, 24, 560, 349]
    return [...quickSort(left), pivot, ...quickSort(right)]
}

/* 
pivot = 45
left  = 32, 12, 24, 
right = 900, 456, 230, 560, 349
*/

/* 
pivot = 6
left  = 1, 5
right = 45, 32, 12, 900, 456, 230, 24, 560, 349
*/
console.log(numeros2)
console.time()
console.log(quickSort([...numeros2]))
console.timeEnd()






// contador con recursividad
function contador(num){
    if(num > 10){
        return;
    }
    console.log(num)

    contador(num + 1)
}

//contador(1)


let numeros4 = [66, 45, 32, 12, 51, 900, 456, 230, 24, 560, 349, 10]
// [10, 45, 32, 12, 51, 900, 456, 230, 24, 560, 349, 66]
// [10, 12, 32, 45, 51, 900, 456, 230, 24, 560, 349, 66]
// [10, 12, 24, 45, 51, 900, 456, 230, 32, 560, 349, 66]
// [10, 12, 24, 32, 51, 900, 456, 230, 45, 560, 349, 66]
// [10, 12, 24, 32, 45, 900, 456, 230, 51, 560, 349, 66]

function selectionSort(arr = []){
    const len = arr.length

    for(let i = 0; i < len - 1; i++){
        let min = i
        for(let j = i + 1; j < len; j++){
            if(arr[j] < arr[min]){
                min = j
            }
        }

        if(min !== i){
            const temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }    
}
/* 
i = 0 1 2
min = 1 2 3
j = 2 3 4

*/