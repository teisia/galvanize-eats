var menu = $.ajax({
  url: "https://galvanize-eats-api.herokuapp.com/menu",
  method: "GET",
  dataType: "json"
})

menu.done(function(response) {
  var items = response["menu"];
  for (var i = 0; i < items.length; i++) {
    var itemVal = parseFloat(items[i]["price"]);
    if (items[i]["type"] === "burger") {
      $(".burger").append("<br><option value ='" + itemVal + "'>" + items[i]['name'] + " " + itemVal + "</option>");
    } else {
      $(".pizza").append("<option value ='" + itemVal + "'>" + items[i]['name'] + " " + itemVal + "</option>");
    }
  }
  $('select option:nth-child(2)').attr("selected", "selected");
})

var arr = [];

$("#addMe").click(function() {
  var quantity = document.getElementById('quantity').value;
  var subtotal = 0;
  $(".menuItems :selected").clone().appendTo(".selectedItems");
  $(".selectedItems").append("<div>" + quantity + "</div>");
  $(".menuItems :selected").each(function() {
    var selected = $(this).val();
    arr.push(selected);
  });
  for (var i = 0; i < arr.length; i++) {
    subtotal += (parseFloat(arr[i]) * quantity);
    var tax = parseFloat((.083 * subtotal).toFixed(2));
    var gTotal = (tax + subtotal).toFixed(2);
  }
  $(".totals").html("<div>Subtotal" + "  " + subtotal + "<br>" + "Tax" + "  " + tax + "<br>" + "<strong>Grand Total" + "  " + gTotal + "</strong></div>");
})


$("#deliver").click(function() {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var address = document.getElementById("address").value;
  var dataString = "name=" + name + "&phone=" + phone + "&address=" + address;
  if (name == "" || phone == "" || address == "") {
    alert("Please fill out all fields");
  } else {
    $.ajax({
      type: "POST",
      url: "https://galvanize-eats-api.herokuapp.com/orders",
      data: dataString,
      cache: false,
      success: function(data) {
        console.log(data);
      }
    });
  }
  return false;
})
