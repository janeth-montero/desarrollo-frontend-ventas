//#region 1. VARIABLES GLOBALES

const imagePath = `../assets/img/real-estate/`;

const apiURL = 'https://65236513f43b179384155d5f.mockapi.io/api';

let realEstatesList = [];

//#endregion


//#region 2. MODELOS Y FUNCIONES


  //#region MODELO DE DATOS (MODELS)

  // Definimos la clase RealEstate
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

  //#endregion


  //#region VISTA DE LOS MODELOS EN HTML (VIEW)

  // Funcion que controla los datos a mostrar en la vista, mensaje o tabla con datos.
  function displayView(houses) {

    clearTable();

    showLoadingMessage();

    if (houses.length === 0) {

      showNotFoundMessage();

    } else {

      hideMessage();

      displayTable(houses);
    }

  }


  // Funcion que agrega los datos de los modelos de casas a la tabla.
  function displayTable(houses) {

    const tablaBody = document.getElementById('data-table-body');

    houses.forEach(house => {

      const row = document.createElement('tr');

      row.innerHTML = `
        <td> ${house.id} </td>
        <td> <img src="${imagePath + house.image}" alt="${house.name}" width="100"> </td>
        <td>${house.name}</td>
        <td>${house.description}</td>
        <td>${house.bedrooms}</td>
        <td>${house.bathrooms}</td>
        <td>${formatCurrency(house.price)}</td>
        <td>${formatM2(house.landArea)}</td>
        <td>${formatM2(house.constructionArea)}</td>
      `;

      tablaBody.appendChild(row);

    });

  }


  // Funcion que limpia la tabla
  function clearTable() {
    const tableBody = document.getElementById('data-table-body');

    tableBody.innerHTML = '';
  }


  // Funcion que muestra mensaje de carga
  function showLoadingMessage() {
    const message = document.getElementById('message');

    message.innerHTML = 'Cargando...';

    message.style.display = 'block';
  }


  // Funcion que muestra mensaje de que no se encuentraron datos
  function showNotFoundMessage() {
    const message = document.getElementById('message');

    message.innerHTML = 'No se encontraron casas con el filtro proporcionado.';

    message.style.display = 'block';
  }


  // Funcion que oculta mensaje
  function hideMessage() {
    const message = document.getElementById('message');

    message.style.display = 'none';
  }

  //#endregion


  //#region FILTROS (VIEW)

  // Funcion que inicializa los eventos de los botones del filto
  function initButtonsHandler() {

    document.getElementById('filter-form').addEventListener('submit', event => {
      event.preventDefault();
      applyFilters();
    });

    document.getElementById('reset-filters').addEventListener('click', () => {
      document.querySelectorAll('input.filter-field').forEach(input => input.value = '');
      applyFilters();
    });

  }


  // Funcion que gestiona la aplicacion del filtro a los datos y su despliegue.
  function applyFilters() {
    const filterText = document.getElementById('text').value.toLowerCase();;
    const filterBedrooms = parseFloat(document.getElementById('bedrooms').value);
    const filterMinPrice = parseFloat(document.getElementById('price-min').value);
    const filterMaxPrice = parseFloat(document.getElementById('price-max').value);

    const filteredHouses = filterHouses(realEstatesList, filterText, filterBedrooms, filterMinPrice, filterMaxPrice);

    displayView(filteredHouses);
  }


  // Funcion con la logica para filtrar las casas.
  function filterHouses(houses, text, bedrooms, minPrice, maxPrice) {

    return houses.filter( house =>
        (!bedrooms || house.bedrooms === bedrooms) &&
        (!minPrice || house.price >= minPrice) &&
        (!maxPrice || house.price <= maxPrice) &&
        (!text     || house.name.toLowerCase().includes(text) || house.description.toLowerCase().includes(text))
      );
  }

  //#endregion


  //#region CONSUMO DE DATOS DESDE API

  // Funcion que realiza una solicitud GET a la API para obtener datos de los modelos de casas.
  function searchData() {

    const OPTIONS = {
      method: 'GET'
    };

    fetch(`${apiURL}/real-estate`, OPTIONS)
      .then(response => response.json())
      .then(data => {
        // Mapeamos los datos de modelos a objetos de la clase RealEstate.
        realEstatesList = data.map(item => {

          return new RealEstate(
            item.id,
            item.name,
            item.description,
            item.bedrooms,
            item.bathrooms,
            item.price,
            item.landArea,
            item.constructionArea,
            item.image
          );
        });

        // Mostramos los datos en la vista.
        displayView(realEstatesList);

      })
      .catch(error => console.log(error));

  }

//#endregion


//#endregion


//#region 3. FUNCIONES INICIALIZADORAS Y CONTROLADORES DE EVENTOS (CONTROLLER)

initButtonsHandler();

showLoadingMessage();

searchData();

//#endregion
