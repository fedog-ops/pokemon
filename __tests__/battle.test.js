const { Pokeball } = require('../Pokemon-stuff/pokeball')
const { Rattata, Squirtle, Charmander } = require('../Pokemon-stuff/pokemon')
const Trainer = require('../Pokemon-stuff/trainer')
const Battle = require('../Pokemon-stuff/battle')

describe('', () => {
        test('', () => {
        let ash = new Trainer
        let dave = new Trainer
           
        let squirtle = new Squirtle
        let charmander = new Charmander
        
        ash.catch(squirtle)
        dave.catch(charmander)
        
        let ashVsDave = new Battle(ash, dave)   
       
        expect(ashVsDave.fight()).toBe(24)
        

        }) 
        test('', () => {
            
        }) 
})

describe('', () => {
    test('', () => {
    
    }) 
});