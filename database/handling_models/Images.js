var db = require("../database/manager.js");

class Images {

  constructor() {

  }

  static createImage(imageInfo) {
    var query = "INSERT INTO 'images' ('Id', 'Nombre', 'Titulo', 'Descripcion', 'Estatus', 'FechaCreacion', 'FechaModificacion', 'UsuarioModificacion') VALUES";
    var fullQ = this.query+"("
      +imageInfo.name+","
      +imageInfo.title+","
      +imageInfo.description+","
      +imageInfo.status+","
      +imageInfo.creationDate+","
      +imageInfo.modificationDate+","
      +imageInfo.userModofication+")";
    db.get().query(fullQ, function(err){
      if (err) throw  err;
      console.log("1 record inserted in images");
    });
  }

  static readImage(imageInfo){
    var query = "SELECT * FROM 'images' WHERE Id = "+imageInfo.id;
    db.get.query(query, function(err, result){
      if(err) throw err;
      console.log(result);
    });
  }

  static updateImage(imageInfo){
    var query = "UPDATE 'images' SET (";
    var fullQ = this.query
      +"Nombre = "+imageInfo.name+", "
      +"Titulo = "+imageInfo.title+","
      +"Descripcion ="+imageInfo.description+","
      +"Estatus ="+imageInfo.status+","
      +"FechaCreacion ="+imageInfo.creationDate+","
      +"FechaModificacion ="+imageInfo.modificationDate+","
      +"UsuarioModificacion ="+imageInfo.userModofication
    +") WHERE Id = "+imageInfo.id;

    db.get.query(fullQ, function(err, result){
      if (err) throw err;
      console.log(result.affectedRows+ "recod(s) updated");
    });
  }

  static deleteImage(imageInfo){
    var query = "DELETE FROM 'image' WHERE id="+imageInfo.id;
    db.get.query(query, function(err, result){
      if (err) throw err;
      console.log(result.affectedRows+ "recod(s) deleted");
    });
  }

}
