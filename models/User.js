var db = require('../database/manager.js');

class User {

  constructor() {

  }

  static createUser(userInfo){
    var query = "INSERT INTO 'usuario' ('Nombre', 'Apellidos', 'Email', 'Login', 'Password', 'Estatus', 'TieneVigencia', 'Vigencia', 'IdRol', 'FechaCreacion', 'FechaModificacion', 'UsuarioModificacion') VALUES";
    var fullQ = this.query+"("
      +userInfo.name+","
      +userInfo.lastName+","
      +userInfo.email+","
      +userInfo.login+","
      +userInfo.password+","
      +userInfo.status+","
      +userInfo.hasValidity+","
      +userInfo.validity+","
      +userInfo.idRol+","
      +userInfo.crationDate+","
      +userInfo.modificationDate+","
      +userInfo.userModofication+")";
    db.get.query(fullQ, function (err){
      if (err) throw  err;
      console.log("1 record inserted in usuarios");
    });
  }
  static readUser(key, userInfo){
    var query = "SELECT * FROM 'usuario' WHERE Nombre ="+userInfo.name;
    db.get.query(query, function(err, result){
      if(err) throw err;
      console.log(result);
    });
  }

  static updateUser(userInfo){
    var query = "UPDATE 'usuario' SET (";
    var fullQ = this.query
    +"Nombre = "+userInfo.name+","
    +"Apellidos = "+userInfo.lastName+","
    +"Email = "+userInfo.email+","
    +"Login = "+userInfo.login+","
    +"Password = "+userInfo.password+","
    +"Estatus = "+userInfo.status+","
    +"TieneVigencia = "+userInfo.hasValidity+","
    +"Vigencia = "+userInfo.validity+","
    +"IdRol = "+userInfo.IdRol+","
    +"FechaCreacion = "+userInfo.crationDate+","
    +"FechaModificacion = "+userInfo.modificationDate+","
    +"UsuarioModificacion = "+userInfo.userModofication+") WHERE Id = "+userInfo.id;

    db.get.query(fullQ, function(err, result){
      if (err) throw err;
      console.log(result.affectedRows+ "recod(s) updated");
    });

  }

  static deleteUser(userInfo){
    var query = "DELETE FROM 'usuario' WHERE id="+userInfo.id;
    db.get.query(query, function(err, result){
      if (err) throw err;
      console.log(result.affectedRows+ "recod(s) deleted");
    });
  }

  static findBy(key , info){
    var query = "SELECT * FROM 'usuarios' WHERE "+key+"="+info;
    return db.get.query(query, function(err, result){
      if(err) throw err;
      console.log(result);
    });
  }

}
