const { Pokeball } = require('../Pokemon-stuff/pokeball')
const { Pokemon, Rattata, Squirtle } = require('../Pokemon-stuff/pokemon')
const Trainer = require('../Pokemon-stuff/trainer')

describe('Catch', () => {
        test('should be able to add a pokemon to a pokeball in trainer storage', () => {
            const ash = new Trainer
            const Rat = new Rattata('dave', 21, 20)
            ash.catch(Rat)
            expect(ash.belt[0].storage).toBe(Rat)
        }) 
        test('should be able to add multiple pokemon to pokeballs in trainer storage', () => {
            const ash = new Trainer
            const Rat = new Rattata('dave', 21, 20)
            const Rat2 = new Squirtle('Christian', 21, 20)
            ash.catch(Rat)
            ash.catch(Rat2)
            expect(ash.belt[1].storage).toBe(Rat2)
        }) 
})
describe('getPokemon', () => {
    test('search for and return pokemon if found in belt', () => {
        const ash = new Trainer
        const Rat = new Rattata('dave', 21, 20)
        const Rat2 = new Squirtle('Christian', 21, 20)
        ash.catch(Rat)
        ash.catch(Rat2)
        expect(ash.getPokemon(Rat2)).toEqual(Rat2)
    }) 
});