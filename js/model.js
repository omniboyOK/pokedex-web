class Model {
    constructor() {
        
    }
}

Model.prototype.getPokemonAPI = ()=>{
    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon",
        success: function(response){
            Model.prototype.pokemo_list = response.results;
        }
      });
    
}

Model.prototype.getPokemonList = ()=>{
    return this.pokemon_list;
}

Model.prototype.getCurrentPokemon = (uri)=> {
    $.ajax({
        url : uri,
        success: function(response){
            Model.prototype.currentPokemon = response.results;
        }
    })
}