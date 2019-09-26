const app = new Controller(new View(), new Model());

$(document).on("ready", () => {
  app.initialize();
  $("#search").click(() => {
    app.getList();
  });
  $("#turnOn").click(() => {
    app.view.turnOnPokedex();
    $('#turnOn').addClass("disabled");
  });
  $("#next").click(() => {
    app.getNextPage(app.model);
  });
  $("#prev").click(() => {
    app.getPrevPage(app.model);
  });
});
