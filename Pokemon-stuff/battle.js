const { Pokeball } = require('./pokeball')
const { Pokemon } = require('./pokemon')
const { Trainer } = require('./trainer')

class Battle{
    constructor(trainer1, trainer2){
        this.trainer1 = trainer1
        this.trainer2 = trainer2
        this.pokemon1 = trainer1.belt[0].storage
        this.pokemon2 = trainer2.belt[0].storage
    }
    fight(pokemon1, pokemon2) {
        console.log(pokemon1, pokemon2, "<<<<<<<")
       if(this.pokemon1.isEffectiveAgainst(this.pokemon2)){
            this.pokemon1.attackDamage*= 1.25
            this.pokemon2.hitPoints-= this.pokemon1.attackDamage
            console.log(`${this.pokemon1.name} is stronger against ${this.pokemon2.name}`)
            return this.pokemon2.hitPoints
       }
       else if(!this.pokemon1.isEffectiveAgainst(this.pokemon2)){
        this.pokemon1.attackDamage*= 0.75
        this.pokemon2.hitPoints-= this.pokemon1.attackDamage
        console.log(`${this.pokemon1} is weaker against ${this.pokemon2}`)
        return this.pokemon2.hitPoints
    }

    }
}
module.exports = Battle