let y = 0;

var x = document.getElementById("crismas");
var hideMainBody = document.getElementById("mainBody");
var hideTable = document.getElementById("table");

function toggle() {

  if(x.style.display === "none" && y == 0) {
       x.style.display = "flex";
       y += 1;
    }

    else if (x.style.display === "flex") {
      x.style.display = "none";
    }


    else if (y == 1) {
      alert('You have wone IPhone 15!!! \n Please send shipment fee of 100$ at adress: BTC: 1bUmhSoTXozBRBEtR8LeF9TGbZBN')
      y +=1;
    }

    else if (y == 2){ 
       hideTable.style.display = "flex";
       hideMainBody.style.display = "none";
    }

    else {
      x.style.display = "none";
    }
}

$.getJSON('https://ipapi.co/json/', function(data){
      $("#ip").text(data.ip);
      $('#isp').text(data.org);
      $('#country').text(data.country_name);
      $('#city').text(data.region);
      $("#gmaps").attr("src", "https://www.google.com/maps?q="+data.latitude+","+data.longitude+"&output=embed");
    })



function timer() {
  const date = new Date();
  document.getElementById("time").innerHTML = date.toLocaleTimeString(); 
}

setInterval(timer, 1000)
