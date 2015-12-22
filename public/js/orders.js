var menu = $.ajax({
  url: "https://galvanize-eats-api.herokuapp.com/menu",
  method: "GET",
  dataType: "json"
})

menu.done(function(response) {
  var items = response["menu"];
    for (var i = 0; i < items.length; i++) {
        var itemVal = parseFloat(items[i]["price"]);
      $(".menuItems").append("<option disabled>"+items[i]['type']+"</option>");
      $(".menuItems").append("<option value ='"+itemVal+"'>"+items[i]['name']+" "+itemVal+"</option>");
      $('select option:nth-child(2)').attr("selected", "selected");

}
})

$("#addMe").click(function() {
  $(".menuItems :selected").clone().appendTo(".selectedItems");
  })

$("#deliver").click(function() {
  $(".totals").append("Subtotal" + "<br>" + "Tax" + "<br>" + "Grand Total" + "");
})
