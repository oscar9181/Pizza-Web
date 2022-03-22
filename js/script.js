
  
      $(document).ready(function () {
        $("#pizzaOrdered").on("click", function (event) {
          event.preventDefault();
          var size = $("#pizzasize :selected").val();
          var crust = $("#pizzacrust :selected").val();
          var topping = $("#pizzatopping :selected").val();
      



          total = parseInt(size) + parseInt(crust) + parseInt(topping);
          alert(total);
      
          function Pizza(size, topping, crust, total) {
            this.size = size;
            this.topping = topping;
            this.crust = crust;
            this.total = total;
          }
          
      
          var newPizza = new Pizza(size, topping, crust, total);
          var totalOrder = `<p>Total sh ${newPizza.total}</p>`;
          var sizeOrder = `<p>Size sh ${newPizza.size}</p>`;
          var crustOrder = `<p>Crust sh ${newPizza.crust}</p>`;
          var toppingOrder = `<p>Topping sh ${newPizza.topping}</p>`;
      
          
          $("#pizzerias").append(sizeOrder + crustOrder + toppingOrder + totalOrder);
          var destination=prompt("Please input your destination")
          alert("Your order has been recorded your pizza will be delivered as soon as possible Bon Appetite!"+ destination+ total)

          
        });
      });
     
 



