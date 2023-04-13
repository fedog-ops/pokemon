const _ = require('./pokemon')

class Pokeball {
    constructor(){
        this.storage = {}
    }
isEmpty(){
        return Object.keys(this.storage).length === 0
}

throw(caughtPokemon){
 if(caughtPokemon){  
       if(this.isEmpty()){
            this.storage = caughtPokemon
          //  console.log(`you caught ${caughtPokemon.name}`)
        } else{
        // console.log(`GO ${this.contains()}!!!!`)
        }
 }
        return this.storage
} 

contains(){
    // console.log(this.storage)
    if(this.isEmpty()){
        return 'empty ...'
    }
        return this.storage.name
   }
}

module.exports = {Pokeball}