import "./styles.css";

document.getElementById("submitdata").onclick = function () {
  document.getElementById("table").style.display = "table";

  var table = document.getElementById("table");
  var row = table.insertRow(-1);
  var user = row.insertCell(0);
  var email = row.insertCell(1);
  var addr = row.insertCell(2);
  var admin = row.insertCell(3);
  var img = row.insertCell(4);
  user.innerHTML = document.getElementById("input-username").value;
  email.innerHTML = document.getElementById("input-email").value;
  addr.innerHTML = document.getElementById("input-address").value;
  admin.innerHTML = document.getElementById("input-admin").value;
  img.innerHTML = document.getElementById("input-image").value;

  return false;
};
