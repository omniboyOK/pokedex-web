class Controller {
  constructor(view, model) {
    this.model = model;
    this.view = view;
  }

  initialize = () => {
    this.getPokemonAPI(this.model);
    this.view.render();
  };

  setLoading() {
    this.view.startLoading();
  }

  getPokemonAPI(model) {
    $.ajax({
      url: "https://pokeapi.co/api/v2/pokemon",
      success: function(response) {
        var list = response;
        model.pokemonList = list;
      }
    });
  }

  getNextPage(model){
    $.ajax({
        url: model.pokemonList.next,
        success: function(response) {
          var list = response;
          model.pokemonList = list;
        }
      });
      this.getList();
  }

  getPrevPage(model){
    $.ajax({
        url: model.pokemonList.previous,
        success: function(response) {
          var list = response;
          model.pokemonList = list;
        }
      });
      this.getList();
  }

  getList() {
    this.view.startLoading();
    setTimeout(() => {
      this.view.drawList(this.model.pokemonList);
      this.view.showContent();
    }, 2000);
  }
}
