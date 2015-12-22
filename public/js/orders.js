var menu = $.ajax({
  url: "https://galvanize-eats-api.herokuapp.com/menu",
  method: "GET",
  dataType: "json"
})

menu.done(function(response) {
  var items = response["menu"];
  for (var i = 0; i < items.length; i++) {
    var itemVal = parseFloat(items[i]["price"]);
    //$(".menuItems").append("<option disabled>"+items[i]['type']+"</option>");
    $(".menuItems").append("<option value ='" + itemVal + "'>" + items[i]['name'] + " " + itemVal + "</option>");
    $('select option:nth-child(2)').attr("selected", "selected");
  }
})

var arr = [];

$("#addMe").click(function() {
  var subtotal = 0;
  $(".menuItems :selected").clone().appendTo(".selectedItems");
  $(".menuItems :selected").each(function() {
    var selected = $(this).val();
    arr.push(selected);
  });
  for (var i = 0; i < arr.length; i++) {
    subtotal += parseFloat(arr[i]);
    var tax = parseFloat((.083 * subtotal).toFixed(2));
    var gTotal = (tax + subtotal).toFixed(2);
  }
  $(".totals").html("<div>Subtotal" + subtotal + "<br>" + "Tax" +tax+ "<br>" + "Grand Total" +gTotal+ "</div>");
})

$("#deliver").click(function() {

})
