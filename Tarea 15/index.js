function fibonacci(num) {
    let lista = [];

    for (let i = 0; i < num; i++) {
        if (i === 0 || i === 1) {
            lista.push(1);
        } else {
        lista.push(lista[i-1] + lista[i-2]);
        }
    }

    return lista;
    }

    console.log(fibonacci(6));