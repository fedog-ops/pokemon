const { Pokeball } = require('./pokeball')
const { Pokemon } = require('./pokemon')


class Trainer {
    constructor(name) {
    this.name = name;
    this.belt = [
    new Pokeball,
    new Pokeball,
    new Pokeball,
    new Pokeball,
    new Pokeball,
    new Pokeball,
    ]
    }
    catch(caughtPokemon) {
        for(let i = 0; i < this.belt.length - 1; i++ ){
        if (this.belt[i].isEmpty()) {
            this.belt[i].throw(caughtPokemon)
            return
            }
        }
    }
    getPokemon(findPokemon) {
        for(let i = 0; i < this.belt.length; i++) {
            if (this.belt[i].storage === findPokemon) {
                return this.belt[i].throw(findPokemon)
            }
        }
}
}


module.exports = Trainer



