// import JSEncrypt from 'jsencrypt';
// import CryptoJS from 'crypto-js';

async function login(email, password) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Accept","*/*");
  myHeaders.append("Connection","keep-alive");
  myHeaders.append("Accept-Encoding","gzip, deflate, br");

    // const secretKey = myConfig.secretKey;
    // var raw = JSON.stringify({
    //   email: email,
    //   password: CryptoJS.AES.encrypt(password, secretKey).toString(),
    //   //password: password,
    // });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  try {
    let data = await fetch("http://localhost:3000/api/usuarios/ingresar", requestOptions);
    let prueba = await data.json();
    window.sessionStorage.setItem("userId", prueba.data.user._id);
    window.sessionStorage.setItem("token", prueba.data.token);
    return prueba;
  } catch (err) {
    // console.warn(err);
    return null;
  }
}

async function validateToken(token) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({ token }),
    redirect: "follow",
  };

  try {
    let res = await fetch("http://localhost:8080/api/auth/verification", requestOptions);
    return await res.json();
  } catch (err) {
    console.warn(err);
  }
}

 export { login, validateToken};