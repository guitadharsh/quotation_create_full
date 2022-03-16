var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
            
    btn.onclick = function() {
      modal.style.display = "block";
    }
            

    span.onclick = function() {
      modal.style.display = "none";
    }
            
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }


function multiply(){
  
  var price = document.getElementById("price").value
  var qty = document.getElementById("qty").value
  var form_need = document.getElementById("form_need").value
  var m = price*qty; //to find subtotal
  var t = (m*form_need)/100; //to find total amount
  document.getElementById("subTotal").value = t;
  document.getElementById("total").value = t;
  // alert(form_need);

}


            