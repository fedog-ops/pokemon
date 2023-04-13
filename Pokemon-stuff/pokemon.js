class Pokemon {
        constructor(name, hitPoints = 40, attackDamage = 10) {
        this.name = name;
        this.hitPoints = hitPoints;
        this.attackDamage = attackDamage;
        this.type = 'normal';
        this.move = 'tackle';
    }   
isEffectiveAgainst(enemy) {
    return enemy.type === 'normal'
    }
isWeakTo(enemy) {
    
    return enemy.type !== 'normal'
    }
 takeDamage(enemy){
    this.hitPoints-= enemy.attackDamage
    return this.hitPoints
 }
 useMove(){
    // console.log(`${this.name} used ${this.move}!!!`)
     return this.attackDamage
 }
 hasFainted(){
     return this.hitPoints === 0
 }
}

class FirePokemon extends Pokemon {
    constructor(name, hitPoints, attackDamage, move) {
        super(name, hitPoints, attackDamage, move);
        this.strength = 'grass';
        this.weakness = 'water';
        this.type = 'fire'
    }
    isEffectiveAgainst(enemy){
        return enemy.type === this.strength
    }
    isWeakTo(enemy) {
        return enemy.type === this.weakness
    }
}

class WaterPokemon extends Pokemon {
    constructor(name, hitPoints, attackDamage, move) {
        super(name, hitPoints, attackDamage, move)
        this.strength = 'fire';
        this.weakness = 'grass';
        this.type = 'water'
    }
    isEffectiveAgainst(enemy){
        return enemy.type === this.strength
    }
    isWeakTo(enemy) {
        return enemy.type === this.weakness
    }
}

class GrassPokemon extends Pokemon {
    constructor(name, hitPoints, attackDamage) {
        super(name, hitPoints, attackDamage)
        this.strength = 'water';
        this.weakness = 'fire';
        this.type = 'grass'
    }
    isEffectiveAgainst(enemy){
        return enemy.type === this.strength
    }
    isWeakTo(enemy) {
        return enemy.type === this.weakness
    }
}
class Charmander extends FirePokemon{
    constructor() {
    super();
    this.name = 'Charmander'
    this.move = 'ember'
    this.attackDamage = 17
    this.hitPoints = 44
    }
}
class Squirtle extends WaterPokemon{
    constructor() {
    super();
    this.name = "Squirtle"
    this.move = 'water gun'
    this.attackDamage = 16
    this.hitPoints = 44
    }
}
class Bulbasaur extends GrassPokemon{
    constructor() {
    super();
    this.name = 'Bulbasaur'
    this.move = 'vine whip'
    this.attackDamage = 45
    this.hitPoints = 16
    }
}
class Rattata extends Pokemon{
    constructor(name) {
        super(name);
        this.name = "Rattata"
        }
}

module.exports = {
    Pokemon, 
    FirePokemon, 
    WaterPokemon, 
    GrassPokemon, 
    Charmander, 
    Squirtle,
    Bulbasaur,
    Rattata}