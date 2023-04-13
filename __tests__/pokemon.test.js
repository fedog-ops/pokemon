const _ = require('../Pokemon-stuff/pokemon')


describe('Set up properties for a pokemon class', () => {
    test('pokemon class should have a name property', () => {
        const pikachu = new _.Pokemon('pikachu')
        expect(pikachu.name).toBe("pikachu")
    });
    test('add type, hitPoints, attackDamage and move to pikachu', () => {
        const pikachu = new _.Pokemon('pikachu', 10, 0)
        expect(pikachu).toEqual({
                name: 'pikachu', 
                type: 'normal',
                hitPoints: 10,
                attackDamage: 0,
                move: "tackle"
            });
    })
    test('return a boolean for isEffectiveAgainst method', () => {
        const pikachu = new _.Pokemon('pikachu', 10, 0,)
        const pikachu2 = new _.Pokemon('pikachu2', 20, 5,)
        expect(typeof pikachu.isEffectiveAgainst(pikachu2)).toBe('boolean')
    })

    test('isEffectiveAgainst method works', () => {
        const pikachu = new _.Pokemon('pikachu', 10, 0)
        const pikachu2 = new _.Pokemon('pikachu2', 20, 5,)

        expect(pikachu.isEffectiveAgainst(pikachu2)).toBe(true)

    })

    test('isWeakTo work?', () => {
        const pikachu = new _.Pokemon('pikachu', 10, 0)
        const pikachu2 = new _.Pokemon('pikachu2', 20, 5,)
        expect(pikachu.isWeakTo(pikachu2)).toBe(false)
    })

    test('take damage reduces pikachus health by number', () => {
        const pikachu = new _.Pokemon('pikachu', 10, 0)
        const squirtle = new _.Pokemon('squirtle', 20, 5)
        pikachu.takeDamage(squirtle)
        expect(pikachu.hitPoints).toBe(5)
    })
});

describe('useMove', () => {
        test('returns pokemons damage', () => {
        const pikachu = new _.Pokemon('pikachu', 10, 0)
        expect(pikachu.useMove()).toBe(0)

    })
})

describe('hasFainted', () => {
    test('when health is zero, hasFainted returns true', () => {
        const squirtle = new _.Pokemon('squirtle', 0, 5)
        expect(squirtle.hasFainted()).toBe(true)
})
})

describe('pokemons strength and weaknesses', () => {
    test('Fire', () => {
        const Flareon = new _.FirePokemon('flareon', 65, 20)
        expect(Flareon.strength).toBe("grass")
        expect(Flareon.weakness).toBe("water")
    })
    test('water', () => {
        const squirtle = new _.WaterPokemon('squirtle', 44, 16)
        expect(squirtle.strength).toBe("fire")
        expect(squirtle.weakness).toBe("grass")
    })
    test('Grass', () => {
        const leafeon = new _.GrassPokemon('leafeon', 65, 17)
        expect(leafeon.strength).toBe("water")
        expect(leafeon.weakness).toBe("fire")
    })
})

describe('effectiveness of pokemons vs each other', () => {
    test('is effective against', () => {
        const Flareon = new _.FirePokemon('flareon', 65, 20)
        const leafeon = new _.GrassPokemon('leafeon', 65, 17)
        const squirtle = new _.WaterPokemon('squirtle', 44, 16)
        expect(Flareon.isEffectiveAgainst(leafeon)).toBe(true)
        expect(leafeon.isEffectiveAgainst(squirtle)).toBe(true)
        expect(squirtle.isEffectiveAgainst(Flareon)).toBe(true)

    })
    test('is weak against', () => {
        const Flareon = new _.FirePokemon('flareon', 65, 20)
        const leafeon = new _.GrassPokemon('leafeon', 65, 17)
        const squirtle = new _.WaterPokemon('squirtle', 44, 16)
        expect(Flareon.isWeakTo(squirtle)).toBe(true)
        expect(leafeon.isWeakTo(Flareon)).toBe(true)
        expect(squirtle.isWeakTo(leafeon)).toBe(true)
    })
});


describe('Pokemon Species', () => {
    test('Charmander move is ember', () => {
        const Charmander = new _.Charmander('charmander', 44, 17)
   expect(Charmander.move).toBe('ember')
    })
    test('Squirtle move is water gun', () => {
        const Squirtle = new _.Squirtle('squirtle',4 , 5)
   expect(Squirtle.move).toBe('water gun')
    })
    test('Bulbasaur move is vine whip', () => {
        const Bulbasaur = new _.Bulbasaur('bulbasaur', 0, 5)
   expect(Bulbasaur.move).toBe('vine whip')
    })
    test('Rattata is a defeault Pokemon', () => {
        const Rattata = new _.Rattata('Rattata', 20, 5)
        expect(Rattata.move).toBe('tackle')
    })
});
