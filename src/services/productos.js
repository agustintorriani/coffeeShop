async function agregarProducto(registro) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("x-acces-token", window.sessionStorage.getItem("token"));
    myHeaders.append("Accept","*/*");
    myHeaders.append("Connection","keep-alive");
    myHeaders.append("Accept-Encoding","gzip, deflate, br");
  
    var raw = JSON.stringify({
      userId: registro.userId,
      listId: registro.listId,
      film: registro.film,
    });
  
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
  
    try {
      let data = await fetch("http://localhost:4000/api/userList/managerList", requestOptions);
      let res = await data.json();
      return res;
    } catch (err) {
      // console.warn(err);
      return null;
    }
  }
  
  async function obtenerProductos(userId, filmId) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("x-access-token", window.sessionStorage.getItem("token"));
    myHeaders.append("Accept","*/*");
    myHeaders.append("Connection","keep-alive");
    myHeaders.append("Accept-Encoding","gzip, deflate, br");
  
    var raw = JSON.stringify({
      userId: userId,
      filmId: filmId,
    });
  
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
  
    try {
      let data = await fetch("http://localhost:4000/api/userList/getListByFilm", requestOptions);
      let res = await data.json();
      return res;
    } catch (err) {
      // console.warn(err);
      return null;
    }
  }
   export { agregarProducto, obtenerProductos};