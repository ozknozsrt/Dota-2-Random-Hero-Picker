var xmlhttp = new XMLHttpRequest();
var url = "https://api.opendota.com/api/heroStats";

xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    myFunction(myArr);
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
  var random = Math.floor(Math.random() * arr.length);
  var i = arr.length;
  var primary_attr;
  document.getElementById("total").innerHTML = i;
  document.getElementById("id01").innerHTML = "<img src=http://cdn.dota2.com/" + arr[random].icon + "> " + arr[random].localized_name;
  if (arr[random].primary_attr == "agi") {
    var primary_attr = "Agility";
  } else if (arr[random].primary_attr == "int") {
    var primary_attr = "Intelligence";
  } else if (arr[random].primary_attr == "str") {
    var primary_attr = "Strength";
  }

  document.getElementById("primary_attr").innerHTML = primary_attr;
  document.getElementById("attack_type").innerHTML = arr[random].attack_type;
  document.getElementById("roles").innerHTML = arr[random].roles;
}
