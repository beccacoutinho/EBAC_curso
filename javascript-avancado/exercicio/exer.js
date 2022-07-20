import {dogs} from './dogs';
import {veiculos} from './veiculos';

const filteredMonths = veiculos.filter( (veiculos)=> {
    return veiculos.portas === 2
})

console.log(filteredMonths)


const racadal = dogs.filter ((dogs) =>{
    return dogs.raca === 'Dalmata'
})

console.log(racadal)


racaDal.forEach(dogs => {
    toPrint += dogs.nome + ', '
 });

console.log(racaDal)


let totalDeRodas = veiculos.reduce((prev, next) => {
    return {rodas: prev.rodas + next.rodas}
})

console.log(totalDeRodas)


