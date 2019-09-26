class View {
  constructor() {
    this.$layout = $(`<div id="top"></div>

    <div class="" id="interface">
        <div id="menu">
        <div class="ui basic button" id="prev"><<</div>
        <div class="ui basic button" id="search">Ver Datos</div>
        <div class="ui basic button" id="next">>></div>
        </div>

        <div class="ui inverted blue relaxed divided list" id="lista">
        </div>

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
    $("#load").hide();
    $("#menu").hide();
    $("#pokedex").addClass("loading animated bounceInDown");
  }

  drawList(list) {
    var ul = document.getElementById("lista");
    ul.innerHTML = "";
    list.results.forEach(element => {
      var li = document.createElement("div");
      var a = document.createElement("a");
      li.href = element.url;
      li.classList.add("item");
      li.textContent = element.name.toUpperCase();
      ul.append(li, a);
    });
  }

  startLoading = () => {
    $("#lista").hide();
    $("#menu").hide();
    $("#load").fadeIn();
    $("#pokedex").addClass("loading");
  };

  showContent = () => {
    $("#load").hide();
    $("#menu").fadeIn();
    $("#lista").fadeIn();
    $("#pokedex").removeClass("loading");
  };

  turnOnPokedex = () => {
    $("#pokedex").removeClass("loading");
    $("#menu").fadeIn(1000);
  };
}
