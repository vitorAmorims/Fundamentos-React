function Megasena(params) {
    const numeros = [];
    for (let i = 0; i < params; i++) {
        numeros.push(Math.floor(Math.random() * 60 + 1));
    }
    numeros.filter((element, index) => {
        return numeros.indexOf(element) === index;
    })
    return numeros.sort((a, b) => {
        return a - b;
    })
}

export default Megasena;