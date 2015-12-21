var menu = $.ajax({
  url: "https://galvanize-eats-api.herokuapp.com/menu",
  method: "GET",
  dataType: "json"
})

menu.done(function(response) {
  var items = response["menu"];
  var itemsArray = [];
    for (var i = 0; i < items.length; i++) {
//      itemsArray.push(items[i]["type"]);
  //var unique = itemsArray.filter(function(elem, pos) {
    //return itemsArray.indexOf(elem) == pos;
//})
      $(".menuItems").append("<option disabled>"+items[i]['type']+"</option>");
      $(".menuItems").append("<option value>"+items[i]['name']+" "+items[i]['price']+"</option>");
      $('select option:nth-child(2)').attr("selected", "selected");

}
})

$("#addMe").click(function() {
  $(".selectedItems").append("");
  })
