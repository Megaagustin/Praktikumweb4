function login() {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
  
  if (username == "" || password == ""){
      alert("Username / Password Tidak Boleh Kosong");
      return false;
  }
  else if (password.length < 8){
      alert("Password Kurang dari 8")
      return false;
  }
  else if (username == "mega" && password == "12345678"){
      window.location = "login2.html";
      return false;
  } else {
      alert("Username atau Password anda salah");
  }
}