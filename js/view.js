class View {
  constructor() {
    this.$layout = $(`<div id="top"></div>
    <div class="ui circular button" id="turnOn">
    <i class="red big power off icon"></i>
    </button>
    </div>
    <div class="" id="interface">
        <div id="menu">
        <div class="ui basic button" id="prev"><<</div>
        <div class="ui basic button" id="search">Ver Datos</div>
        <div class="ui basic button" id="next">>></div>
        </div>

        <div class="ui inverted blue relaxed divided list" id="lista">
        </div>

        <div id="profile"></div>

        <div class="lds-css ng-scope" id="load">
        <div class="lds-spin"><div>
        <div></div></div><div><div></div></div><div><div></div></div>
        <div><div></div></div><div><div></div></div><div><div></div></div></div>
        </div>
    </div>
    <div id="bottom"></div>`);
  }

  render() {
    $("#pokedex").append(this.$layout);
    $("#lista").hide();
    $("#profile").hide();
    $("#load").hide();
    $("#menu").hide();
    $("#pokedex").addClass("loading animated bounceInDown");
  }

  renderProfile(pokemon) {
    $("#pokedex").removeClass("loading");
    $("#lista").hide();
    $("#load").hide();
    $("#menu").hide();
    console.log(pokemon)
    const profile = $("#profile");
    profile.html('');
    //esta variable chequea que exista otro item Type en la lista
    const type2 = pokemon.types[1] ? pokemon.types[1].type.name : "";
    const content = $(`
    <div class="ui grid basic segment">
        <div class="ui seven wide column">
            <img src="${pokemon.sprites.front_default}" alt="">
            <div class="ui label">${pokemon.types[0].type.name}</div>
            <div class="ui label">${type2}</div>
        </div>
        <div class="ui nine wide column">
            <div class="ui label">${pokemon.moves[0].move.name}</div>
            <div class="ui label">${pokemon.moves[1].move.name}</div>
            <div class="ui label">${pokemon.moves[2].move.name}</div>
            <div class="ui label">${pokemon.moves[3].move.name}</div>
        </div>
    </div>
    `);
    const cancel = $(`
    <button class="ui red basic button" id="back_button">
    <i class="ui red cancel icon"></i>
    </button>`);
    cancel.click(()=>{
      app.view.showContent()
    });
    content.append(cancel);
    profile.append(content).hide().fadeIn(1000)
  }

  drawList(list, controller) {
    var ul = document.getElementById("lista");
    ul.innerHTML = "";
    list.results.forEach(element => {
      var li = document.createElement("div");
      li.data = element.url;
      li.classList.add("item");
      li.textContent = element.name.toUpperCase();
      ul.append(li);
      $(li).click(() => {
        controller.getSelectedPokemon(app.model, li.data);
      });
    });
  }

  startLoading = () => {
    $("#lista").hide();
    $("#menu").hide();
    $("#profile").hide();
    $("#load").fadeIn();
    $("#pokedex").addClass("loading");
  };

  showContent = () => {
    $("#load").hide();
    $("#profile").hide();
    $("#menu").fadeIn(800);
    $("#lista").fadeIn(800);
    $("#pokedex").removeClass("loading");
  };

  showProfile = () => {
    $("#interface").show();
    $("#load").hide();
    $("#profile").fadeIn();
    $("#pokedex").removeClass("loading");
  }

  turnOnPokedex = () => {
    $("#pokedex").removeClass("loading");
    $("#menu").fadeIn(1000);
  };
}
