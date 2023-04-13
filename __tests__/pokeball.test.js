const _ = require('../Pokemon-stuff/pokeball')
const { Squirtle, Charmander } = require('../Pokemon-stuff/pokemon')

describe('contains ...', () => {
    test('storage', () => {
        let pokeball1 = new _.Pokeball()
        expect(pokeball1.hasOwnProperty('storage')).toBe(true)
    })
    test('throw function', () => {
            let pokeball1 = new _.Pokeball()
            let dave = new Squirtle('dave', 9, 8)
            let christian = new Charmander('chris', 9, 8)
            
            expect(pokeball1.throw()).toEqual({})
       
            pokeball1.throw(dave)
           expect(pokeball1.contains()).toBe('Squirtle')

           pokeball1.throw(christian)
           expect(pokeball1.contains()).toBe('Squirtle')

    })
    test('throw with no argument returns empty array', () => {
      
        let pokeball1 = new _.Pokeball 
        expect(pokeball1.throw()).toEqual({})
    })
    test('check is Empty', () => {
        let pokeball1 = new _.Pokeball
        expect(pokeball1.isEmpty()).toBe(true)
    })

    test('contains shows pokemon in pokeball', () => {
        let pokeball1 = new _.Pokeball
        let dave = new Squirtle('dave', 9, 8)
        pokeball1.throw(dave)
        expect(pokeball1.contains()).toBe('Squirtle')
    })
    test('contains returns empty string if pokeball empty', () => {
        let pokeball = new _.Pokeball
        expect(pokeball.contains()).toBe('empty ...')
    })
})