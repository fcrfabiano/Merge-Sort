function mergeSort(lista) {
    const meio = lista.length / 2; // Pega metade do tamanho da Lista
    
    if (lista.length < 2) { // Se o tamanho da lista for menor que doiss, retorna a lista
        return lista;
    }

    const left = lista.splice(0, meio); // Divido a lista em duas, esquerda e direita
    return merge(mergeSort(left), mergeSort(lista)); // Combinando as duas arrays
}

function merge(left, right) {
    let arr = []; // Declaro array em branco para guardar a lista ordenada

    while (right.length && left.length) { // Enquanto a lista da esquerda e da direita forem maior que 0
        if (left[0] < right[0]) { // Se o elemento 0 da lista da esquerda for menor que o da direita
            arr.push(left.shift()); // Removo o primeiro item da lista da esquerda e adiciono ao arr
        } else {
            arr.push(right.shift()); // Senão, removo o primeiro item da lista da direita e adiciono ao arr
        }
    }

    return [ ...arr, ...right, ...left];
}

const any_numbers = [];

while (any_numbers.length < 43) {
    any_numbers.push(Math.floor(Math.random() * 42));
}

console.log(any_numbers);

const lista_ordenada = mergeSort(any_numbers);
console.log(lista_ordenada);
