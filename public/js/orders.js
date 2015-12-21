var menu = $.ajax({
  url: "https://galvanize-eats-api.herokuapp.com/menu",
  method: "GET",
  dataType: "json"
})

menu.done(function(response) {
  var items = response["menu"];
    for (var i = 0; i < items.length; i++) {
      $(".menuItems").append("<option disabled>"+items[i]['type']+"</option>");
      $(".menuItems").append("<option>"+items[i]['name']+"</option>");
}
})
