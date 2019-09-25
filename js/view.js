class View {
  constructor() {}
}

View.prototype.drawList = list => {
  list.results.forEach(element => {
    var li = document.createElement("li");
    var ul = document.getElementById("lista");
    var a = document.createElement("a");
    li.textContent = element.name.toUpperCase();
    ul.append(li, a);
  });
};
