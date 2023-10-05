// Definir la clase RealEstate
class RealEstate {

  constructor(id, name, description, bedrooms, bathrooms, price, landArea, constructionArea, image) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.price = price;
    this.landArea = landArea;
    this.constructionArea = constructionArea;
    this.image = image;
  }

}

// Creamos objetos de modelos de casas
const house1 = new RealEstate(1, "Casa Alfa", "Hermosa casa con vistas panorámicas.", 3, 2.5, 250000, 1000, 150, "real-estate-1.jpg");
const house2 = new RealEstate(2, "Casa Beta", "Diseño moderno y espacioso con acabados de lujo.", 3, 3.5, 350000, 300, 180, "real-estate-2.jpg");
const house3 = new RealEstate(3, "Casa Teta", "Casa ideal para familias grandes con jardín y areas de convivencia.", 4, 4.5, 450000, 400, 200, "real-estate-3.jpg");

// Almacenamos los objetos en un array
const realEstateList = [house1, house2, house3];

// Accedemos datos por indices
console.log('Impresion en consola de elementos accesados por indices: ');
console.log(realEstateList[0]);
console.log(realEstateList[1]);
console.log(realEstateList[1]);

// Accedemos datos con funcion forEach() de array
console.log('Impresion en consola de elementos accesados con forEach(): ');
realEstateList.forEach(item => {console.log(item)});
